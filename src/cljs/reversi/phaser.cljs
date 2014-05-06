(ns reversi.phaser
  (:require [clojure.browser.repl]
            [reversi.core :as rcore]))

(def ^:dynamic *border*  rcore/*default-border*)
(def ^:dynamic *phaser-border* [[] [] [] [] [] [] [] []])
(def ^:dynamic *visible-possible-grids-pos* '())
(def ^:dynamic *default-player-piece* rcore/*black-piece*)
(def ^:dynamic *default-pc-piece* rcore/*white-piece*)
(def ^:dynamic *game* (js/Phaser.Game.
                       905 605
                       js/Phaser.AUTO "game_div"))

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

(defn grid-pos->phaser-pos [grid-pos]
  [(+ (* 75 (first grid-pos)) 5)
   (+ (* 75 (second grid-pos)) 5)])

(defn another-color-piece [grid-name]
  (rcore-grid->grid-name
   (rcore/another-color-piece
    (grid-name->rcore-grid grid-name))))

(defn put-piece [piece [x y] game]
  (let [border
        (.-border game)
        phaser-border
        (.-phaserBorder game)
        visible-possible-grids-pos
        (.-visiblePossibleGridsPos game)
        result-border
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
      (doseq [pg-pos visible-possible-grids-pos]
        (set! (.-visible ((rcore/gridth pg-pos phaser-border)
                          "possible-grid")) false))
      (set! (.-visiblePossibleGridsPos game) '())
      (set! (.-border game) result-border)
      result-border)))

(defn pc-ai-put-piece [game]
  (let [border
        (.-border game)
        phaser-border
        (.-phaserBorder game)
        visible-possible-grids-pos
        (.-visiblePossibleGridsPos game)
        pc-possible-grids-pos
        (rcore/find-putable-empty-grids
         *default-pc-piece* border)]
    (if-not (empty? pc-possible-grids-pos)
      (put-piece *default-pc-piece*
                 (rand-nth pc-possible-grids-pos)
                 game))))

(defn show-possible-grid-on-pborder [game]
  (let [border
        (.-border game)
        phaser-border
        (.-phaserBorder game)
        visible-possible-grids-pos
        (.-visiblePossibleGridsPos game)
        player-possible-grids-pos
        (rcore/find-putable-empty-grids
         *default-player-piece* border)]
    (if-not (empty? player-possible-grids-pos)
      (do
        (set! (.-visiblePossibleGridsPos game)
              (concat visible-possible-grids-pos
                      player-possible-grids-pos))
        (doseq [pg-pos player-possible-grids-pos]
          (set! (.-visible ((rcore/gridth pg-pos phaser-border)
                            "possible-grid"))
                true))
        player-possible-grids-pos)
      (pc-ai-put-piece game))))

(defn on-click-possible-grid [pgrid]
  (let [game (.-game pgrid)
        border (.-border game)
        phaser-border (.-phaserBorder game)
        default-player-piece (.-defaultPlayerPiece game)
        default-pc-piece (.-defaultPcPiece game)]
    (put-piece default-player-piece
               (.-gridPosition pgrid)
               game)
    (pc-ai-put-piece game)
    (let [no-put-piece-ai-and-player?
          (nil? (show-possible-grid-on-pborder game))]
      (when (or (rcore/end-game? border) no-put-piece-ai-and-player?)
        (let [winner (rcore/who-win? border)]
          (if (= winner default-player-piece)
            (js/alert "you are winner!")
            (js/alert "you are loser!")))))
    (let [result-count (rcore/grid-count border)]
      (set! (.-text (.-pieceCountText game))
            (str "black-piece: " (result-count rcore/*black-piece*)
                 "\nwhite-piece: " (result-count rcore/*white-piece*))))))

(defn create-pieces [piece-name game]
  (let [piece-color (grid-name->rcore-grid piece-name)]
    (dotimes [y 8]
      (dotimes [x 8]
        (let [phaser-border (.-phaserBorder game)
              phaser-pos
              (grid-pos->phaser-pos [x y])
              piece
              (.sprite (.-add game) (first phaser-pos) (second phaser-pos) piece-name)]
          (set! (.-visible piece) false)
          (set! (.-gridPosition piece) [x y])
          (set! (.-gridColor piece) piece-color)
          (set! (.-phaserBorder game)
                (assoc-in phaser-border [y x piece-name] piece)))))))

(defn create-possible-grids [grid-name game]
  (dotimes [y 8]
    (dotimes [x 8]
      (let [phaser-border (.-phaserBorder game)
            pgrid
            (.sprite (.-add game) (+ 5 (* x 75)) (+ 5 (* y 75)) grid-name)]
        (set! (.-inputEnabled pgrid) true)
        (.add (.-onInputDown (.-events pgrid)) on-click-possible-grid game)
        (set! (.-visible pgrid) false)
        (set! (.-gridPosition pgrid) [x y])
        (set! (.-gridColor pgrid) rcore/*possible-grid*)
        (set! (.-useHandCursor (.-input pgrid)) true)
        (set! (.-phaserBorder game)
              (assoc-in phaser-border [y x grid-name] pgrid))))))

(defn init-border [game]
  (let [phaser-border (.-phaserBorder game)
        view-table [[[3 3] "black-piece"]
                    [[4 4] "black-piece"]
                    [[4 3] "white-piece"]
                    [[3 4] "white-piece"]
                    [[4 2] "possible-grid"]
                    [[3 5] "possible-grid"]
                    [[5 3] "possible-grid"]
                    [[2 4] "possible-grid"]]]
    (doseq [view-pair view-table]
      (let [pos (first view-pair)
            name (second view-pair)]
        (set! (.-visible ((rcore/gridth pos phaser-border) name)) true)))
    (doseq [pos [ [4 2] [3 5] [5 3] [2 4] ]]
      (let [visible-possible-grids-pos (.-visiblePossibleGridsPos game)]
        (set! (.-visiblePossibleGridsPos game)
              (conj visible-possible-grids-pos pos))))))

(defn create-all-pieces [white-name black-name game]
  (doseq [piece-name [white-name black-name]]
    (create-pieces piece-name game)))

(defn create-text [game]
  (let [init-piece-count 2
        text  (str "black-piece: " init-piece-count
                   "\n" "white-piece: " init-piece-count)
        style (clj->js { :font "35px Arial" :fill "#000000" :align "left" })]
    (set! (.-pieceCountText game) (.text (.-add game) 615 20 text style))))

(defn create-buttons [game]
  (let [restart-button
        (.sprite (.-add game) 675 515 "restart-button")]
    (set! (.-inputEnabled restart-button) true)
    (set! (.-useHandCursor (.-input restart-button)) true)
    (.add (.-onInputDown (.-events restart-button))
          (fn [b] (.restartGame game game)) game)
    (set! (.-restartButton game) restart-button)))

(def ^:dynamic *assets-table*
   ;name    path
  [["border"         "assets/reversi-border.png"]
   ["white-piece"    "assets/white-piece.png"]
   ["black-piece"    "assets/black-piece.png"]
   ["possible-grid"  "assets/gray-grid.png"]
   ["restart-button" "assets/restart-button.png"]])

(defn preload [game]
  (let [loader (.-load game)]
    (doseq [pair *assets-table*]
      (let [name (first pair)
            path (second pair)]
        (.image loader name path)))))

(defn init-phaser [game]
  (set! (.-border game) *border*)
  (set! (.-phaserBorder game) *phaser-border*)
  (set! (.-visiblePossibleGridsPos game) *visible-possible-grids-pos*)
  (set! (.-defaultPlayerPiece game) *default-player-piece*)
  (set! (.-defaultPcPiece game) *default-pc-piece*))

(defn create [game]
  (set! (.-backgroundColor (.-stage game)) "#ffffff")
  (.tileSprite (.-add game) 0 0 605 605 "border")
  (create-possible-grids "possible-grid" game)
  (create-all-pieces "white-piece" "black-piece" game)
  (create-text game)
  (create-buttons game)
  (init-border game))

(defn ^export start [game]
  (init-phaser game)
    (.add (.-state game) "main"
          (clj->js {:preload preload
                    :create create
                    }))
    (.start (.-state game) "main"))
(set! (.-restartGame *game*) start)

(start *game*)
