(ns reversi.phaser
  (:require [clojure.browser.repl]
            [reversi.core :as rcore]))

(def *border* (atom rcore/*default-border*))
(def *phaser-border* (atom [[] [] [] [] [] [] [] []]))
(def *visible-possible-grids-pos* (atom '()))
(def ^:dynamic *default-player-use-piece* rcore/*black-piece*)
(def ^:dynamic *default-pc-use-piece* rcore/*white-piece*)

(defn grid-name->rcore-grid [grid-name]
  (let [gn-rp-table
        {"empty-grid" rcore/*empty-gird*
         "black-piece" rcore/*black-piece*
         "white-piece" rcore/*white-piece*
         "possible-grid" rcore/*possible-grid*}]
    (gn-rp-table grid-name)))

(defn rcore-grid->grid-name [rcore-grid]
  (let [rp-gn-table
        {rcore/*empty-gird*    "empty-grid"
         rcore/*black-piece*   "black-piece"
         rcore/*white-piece*   "white-piece"
         rcore/*possible-grid* "possible-grid"}]
    (rp-gn-table rcore-grid)))

(defn another-color-piece [grid-name]
  (rcore-grid->grid-name
   (rcore/another-color-piece
    (grid-name->rcore-grid grid-name))))

(defn put-piece [piece [x y] border phaser-border]
  (let [result-border
        (rcore/put-piece piece
                         [x y]
                         border
                         :on-reversi-a-piece
                         (fn [[x y]]
                           (set! (.-visible ((rcore/gridth [x y] phaser-border)
                                             (rcore-grid->grid-name piece)))
                                 true)
                           (set! (.-visible ((rcore/gridth [x y] phaser-border)
                                             (another-color-piece
                                              (rcore-grid->grid-name piece))))
                                 false)
                           ))]
    (when-not (empty? result-border)
      (doseq [pg-pos @*visible-possible-grids-pos*]
        (set! (.-visible ((rcore/gridth pg-pos phaser-border)
                          "possible-grid")) false))
      (reset! *visible-possible-grids-pos* '())
      (reset! *border* result-border)
      result-border)))

(defn pc-ai-put-piece [border phaser-border]
  (let [pc-possible-grids-pos
        (rcore/find-putable-empty-grids
         *default-pc-use-piece* border)]
    (if-not (empty? pc-possible-grids-pos)
      (put-piece *default-pc-use-piece*
                 (rand-nth pc-possible-grids-pos)
                 border
                 phaser-border))))

(defn show-possible-grid-on-pborder [border phaser-border]
  (let [player-possible-grids-pos
        (rcore/find-putable-empty-grids
         *default-player-use-piece* border)]
    (if-not (empty? player-possible-grids-pos)
      (do
        (swap! *visible-possible-grids-pos* concat
               player-possible-grids-pos)
        (doseq [pg-pos player-possible-grids-pos]
          (set! (.-visible ((rcore/gridth pg-pos phaser-border)
                            "possible-grid"))
                true))
        player-possible-grids-pos)
      (pc-ai-put-piece border phaser-border))))

(defn on-click-possible-grid [pgrid]
  (put-piece *default-player-use-piece*
             (.-gridPosition pgrid)
             @*border*
             @*phaser-border*)
  (pc-ai-put-piece @*border* @*phaser-border*)
  (let [no-put-piece-ai-and-player?
        (show-possible-grid-on-pborder @*border* @*phaser-border*)]
    (when (or (rcore/end-game? @*border*) (nil? no-put-piece-ai-and-player?))
      (let [winner (rcore/who-win? @*border*)]
        (if (= winner *default-player-use-piece*)
          (js/alert "you are winner!")
          (js/alert "you are loser!")))))

  (let [result-count (rcore/grid-count @*border*)]
    (set! (.-text (.-pieceCountText game))
          (str "black-piece: " (result-count rcore/*black-piece*)
               "\nwhite-piece: " (result-count rcore/*white-piece*)
               )
          )
    )
  )

(defn create-pieces [piece-name game]
  (let [piece-color (grid-name->rcore-grid piece-name)]
    (dotimes [y 8]
      (dotimes [x 8]
        (let [piece
              (.sprite (.-add game) (+ 5 (* x 75)) (+ 5 (* y 75)) piece-name)]
          (set! (.-visible piece) false)
          (set! (.-gridPosition piece) [x y])
          (set! (.-gridColor piece) piece-color)
          (swap! *phaser-border* assoc-in [y x piece-name] piece))))))

(defn create-possible-grids [grid-name game]
  (dotimes [y 8]
    (dotimes [x 8]
      (let [pgrid
            (.sprite (.-add game) (+ 5 (* x 75)) (+ 5 (* y 75)) grid-name)]
        (set! (.-inputEnabled pgrid) true)
        (.add (.-onInputDown (.-events pgrid)) on-click-possible-grid game)
        (set! (.-visible pgrid) false)
        (set! (.-gridPosition pgrid) [x y])
        (set! (.-gridColor pgrid) 3)
        (set! (.-useHandCursor (.-input pgrid)) true)
        (swap! *phaser-border* assoc-in [y x grid-name] pgrid)))))

(defn init-border []
  (set! (.-visible ((rcore/gridth [3 3] @*phaser-border*) "black-piece")) true)
  (set! (.-visible ((rcore/gridth [4 4] @*phaser-border*) "black-piece")) true)
  (set! (.-visible ((rcore/gridth [4 3] @*phaser-border*) "white-piece")) true)
  (set! (.-visible ((rcore/gridth [3 4] @*phaser-border*) "white-piece")) true)
  (set! (.-visible ((rcore/gridth [3 4] @*phaser-border*) "white-piece")) true)
  (set! (.-visible ((rcore/gridth [4 2] @*phaser-border*) "possible-grid")) true)
  (set! (.-visible ((rcore/gridth [3 5] @*phaser-border*) "possible-grid")) true)
  (set! (.-visible ((rcore/gridth [5 3] @*phaser-border*) "possible-grid")) true)
  (set! (.-visible ((rcore/gridth [2 4] @*phaser-border*) "possible-grid")) true)
  (swap! *visible-possible-grids-pos* conj [4 2])
  (swap! *visible-possible-grids-pos* conj [3 5])
  (swap! *visible-possible-grids-pos* conj [5 3])
  (swap! *visible-possible-grids-pos* conj [2 4]))

(defn create-all-pieces [white-name black-name game]
  (doseq [piece-name [white-name black-name]]
    (create-pieces piece-name game)))

(defn create-text [game]
  (let [init-piece-count 2
        text  (str "black-piece: " init-piece-count
                   "\n" "white-piece: " init-piece-count)
        style (clj->js { :font "35px Arial" :fill "#000000" :align "left" })]
    (set! (.-pieceCountText game) (.text (.-add game) 615 20 text style))))


(defn create [game]
  (set! (.-backgroundColor (.-stage game)) "#ffffff")
  (.tileSprite (.-add game) 0 0 605 605 "border")
  (create-possible-grids "possible-grid" game)
  (create-all-pieces "white-piece" "black-piece" game)
  (create-text game)
  (init-border))

(defn preload [game]
  (let [loader (.-load game)]
    (.image loader "border" "assets/reversi-border.png")
    (.image loader "white-piece" "assets/white-piece.png")
    (.image loader "black-piece" "assets/black-piece.png")
    (.image loader "possible-grid" "assets/gray-grid.png")))


;; (defn update [game]
;;   )


(def ^export game (js/Phaser.Game. 905 605 js/Phaser.AUTO "game_div"))

(defn ^export start []
  (.add (.-state game) "main"
        (clj->js {:preload preload
                  :create create
                  ;; :update update
                  }))
  (.start (.-state game) "main"))

(start)
