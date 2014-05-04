(ns reversi.phaser
  (:require [clojure.browser.repl]
            [reversi.core :as rcore]))

(defn preload [game]
  (let [loader (.-load game)]
    (.image loader "border" "assets/reversi-border.png")
    (.image loader "whitePiece" "assets/white-piece.png")
    (.image loader "blackPiece" "assets/black-piece.png")
    (.image loader "grayGrid" "assets/gray-grid.png")
    ))

(defn on-click-piece [piece]
  (js/console.log piece)
  (js/console.log (.-gamePosition piece))
  (js/alert (str "hello kiki you click " (.-gamePosition piece))))

(defn create [game]
  (let [stage (.-stage game)
        add (.-add game)
        center-x (.-centerX (.-world game))
        center-y (.-centerY (.-world game))]
    (do
      (set! (.-background game)
            (.tileSprite add 0 0 640 640 "border"))
      (let [white-piece
            (set! (.-whitePieceSprite game)
                  (.sprite add 5 5 "whitePiece"))]
        (set! (.-inputEnabled white-piece) true)
        (set! (.-gamePosition white-piece) [0 0])
        (.add (.-onInputDown (.-events white-piece)) on-click-piece game))
      (set! (.-blackPieceSpirte game)
            (.sprite add 80 5 "blackPiece"))
      (set! (.-blackPieceSpirte game)
            (.sprite add 80 380 "blackPiece"))
      (set! (.-grayGridSprite game)
            (.sprite add 155 5 "grayGrid"))
      (set! (.-grayGridSprite game)
            (.sprite add 230 80 "grayGrid"))
      (set! (.-grayGridSprite game)
            (.sprite add 380 80 "grayGrid"))
      ;; (set! (.-grayGridSprite game)
      ;;       (.sprite add 90 250 "grayGrid"))
      ;; (set! (.-grayGridSprite game)
      ;;       (.sprite add 90 250 "grayGrid"))
      )))

;; (defn update [game]
;;   )



(def main-state (clj->js {:preload preload
                          :create create
                          ;; :update update
                          }))

(def ^export game (js/Phaser.Game. 605 605 js/Phaser.AUTO "game_div"))

(.add (.-state game) "main" main-state)

(defn ^export run []
  (.start (.-state game) "main"))
