(ns reversi.phaser
  (:require [clojure.browser.repl]
            [reversi.core :as rcore]))

(def *border* (atom rcore/*default-border*))
(def *phaser-border* (atom [[] [] [] [] [] [] [] []]))
(def *visible-possible-grids-pos* (atom '()))

(def ^:dynamic *gn-rp-table* {"empty-grid" rcore/*empty-gird*
                              "black-piece" rcore/*black-piece*
                              "white-piece" rcore/*white-piece*
                              "possible-grid" rcore/*possible-grid*})

(defn grid-name->rcore-piece [grid-name]
  (*gn-rp-table* grid-name))

(defn rcore-piece->grid-name [rcore-piece]
  ;; TODO
  )


(defn put-piece [piece [x y] border phaser-border]
  (let [result-border
        (rcore/put-piece piece
                         [x y]
                         border
                         :on-reversi-a-piece
                         (fn [[x y]]
                           (set! (.-visible ((rcore/gridth [x y] phaser-border) "black-piece")) true)
                           (set! (.-visible ((rcore/gridth [x y] phaser-border) "white-piece")) false)
                           ))]
    (if-not (empty? result-border)
      (do
        (doseq [pg-pos @*visible-possible-grids-pos*]
          (set! (.-visible ((rcore/gridth pg-pos @*phaser-border*) "possible-grid")) false))
        (reset! *visible-possible-grids-pos* '())
        (reset! *border* result-border))
      )))

(defn on-click-possible-grid [pgrid]
  (let [result-border
        (rcore/put-piece rcore/*black-piece*
                         (.-gridPosition pgrid)
                         @*border*
                         :on-reversi-a-piece
                         (fn [[x y]]
                           (set! (.-visible ((rcore/gridth [x y] @*phaser-border*) "black-piece")) true)
                           (set! (.-visible ((rcore/gridth [x y] @*phaser-border*) "white-piece")) false)
                           ))]
    (if-not (empty? result-border)
      (do
        (doseq [pg-pos @*visible-possible-grids-pos*]
          (set! (.-visible ((rcore/gridth pg-pos @*phaser-border*) "possible-grid")) false))
        (reset! *visible-possible-grids-pos* '())
        (reset! *border* result-border))
      ))
  ;; (let [pc-possible-grids-pos
  ;;       (rcore/find-putable-empty-grids rcore/*white-piece* @*border*)]
  ;;   (if-not (empty? pc-possible-grids-pos)
  ;;     (rand-nth pc-possible-grids-pos)
  ;;     )
  ;;   )
  )

(defn create-pieces [piece-name game]
  (let [piece-color (grid-name->rcore-piece piece-name)]
    (dotimes [y 8]
      (dotimes [x 8]
        (let [piece
              (.sprite (.-add game) (+ 5 (* x 75)) (+ 5 (* y 75)) piece-name)]
          (set! (.-visible piece) false)
          (set! (.-gridPosition piece) [x y])
          (set! (.-gridColor piece) piece-color)
          (swap! *phaser-border* assoc-in [y x piece-name] piece)
          )))))

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
        (swap! *phaser-border* assoc-in [y x grid-name] pgrid)
        ))))

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
  (swap! *visible-possible-grids-pos* conj [2 4])
  )

(defn create [game]
  (.tileSprite (.-add game) 0 0 605 605 "border")
  (create-possible-grids "possible-grid" game)
  (let [piece-names '("white-piece" "black-piece")]
    ;; TODO fix it use for or doseq not use loop.
    (loop [names piece-names]
      (when-not (empty? names)
        (create-pieces (first names) game)
        (recur (rest names)))))
  (init-border))

(defn preload [game]
  (let [loader (.-load game)]
    (.image loader "border" "assets/reversi-border.png")
    (.image loader "white-piece" "assets/white-piece.png")
    (.image loader "black-piece" "assets/black-piece.png")
    (.image loader "possible-grid" "assets/gray-grid.png")))


;; (defn update [game]
;;   )


(def ^export game (js/Phaser.Game. 605 605 js/Phaser.AUTO "game_div"))

(defn ^export start []
  (.add (.-state game) "main"
        (clj->js {:preload preload
                  :create create
                  ;; :update update
                  }))
  (.start (.-state game) "main"))

(start)
