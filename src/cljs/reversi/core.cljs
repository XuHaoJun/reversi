(ns reversi.core
  (:require [clojure.browser.repl]))

(def ^:dynamic *empty-grid* 0)
(def ^:dynamic *black-piece* 1)
(def ^:dynamic *white-piece* 2)
(def ^:dynamic *possible-grid* 3)

(def ^:dynamic *default-border*
  ;  0 1 2 3 4 5 6 7
  [[ 0 0 0 0 0 0 0 0 ]  ; 0
   [ 0 0 0 0 0 0 0 0 ]  ; 1
   [ 0 0 0 0 0 0 0 0 ]  ; 2
   [ 0 0 0 1 2 0 0 0 ]  ; 3
   [ 0 0 0 2 1 0 0 0 ]  ; 4
   [ 0 0 0 0 0 0 0 0 ]  ; 5
   [ 0 0 0 0 0 0 0 0 ]  ; 6
   [ 0 0 0 0 0 0 0 0 ]]); 7


(def ^:dynamic *default-possible-empty-grids*
  #{
    [2 2] [3 2] [4 2] [5 2]
    [2 3] [5 3]
    [2 4] [5 4]
    [2 5] [3 5] [4 5] [5 5]
    })

(def ^:dynamic *direction-offsets* [[0 -1] ; top
                                    [1 -1] ; top-right
                                    [1 0]  ; right
                                    [1 1]  ; bottom-right
                                    [0 1] ; bottom
                                    [-1 1] ; bottom-left
                                    [-1 0] ; right
                                    [-1 -1]; top-left
                                    ])

(defn pprint-border [border]
  (for [line border]
    (println line)))

(defn border-height [border]
  (count border))

(defn border-width [border]
  (count (nth border 0 [])))

(defn end-game? [border]
  (not (contains? (set (flatten border))
                  *empty-grid*)))

(defn who-win? [border]
  (let [result-count
        (reduce (fn [m grid]
                  (assoc m grid (inc (m grid))))
                {*black-piece* 0
                 *white-piece* 0
                 *empty-grid* 0}
                (flatten border)
                )]
    (cond (> 0 (result-count *empty-grid*))
          nil
          (> (result-count *white-piece*) (result-count *black-piece*))
          *white-piece*
          :else
          *black-piece*)))

(defn in-border? [[x y] border]
  (let [height (count border)
        width (count (nth border 0 []))]
    (and
     (and (<= x width) (>= x 0))
     (and (<= y height) (>= y 0)))))

(defn white-piece? [grid]
  (= grid *white-piece*))

(defn black-piece? [grid]
  (= grid *black-piece*))

(defn another-color-piece [piece]
  (cond (white-piece? piece) *black-piece*
        (black-piece? piece) *white-piece*
        :else nil))

(defn piece? [grid]
  (or (white-piece? grid) (black-piece? grid)))

(defn empty-grid? [grid]
  (not (piece? grid)))

(defn gridth [[x y] border]
  (get-in border [y x]))

(defn in-empty-grid? [[x y] border]
  (empty-grid? (gridth [x y] border)))

(defn nearby-color-piece-dire-offsets [color [x y] border]
  (reduce (fn [m offset]
            (let [offseted-x (+ x (first offset))
                  offseted-y (+ y (second offset))
                  grid (gridth [offseted-x offseted-y] border)]
              (if (= grid color)
                (cons offset m)
                m)))
          '()
          *direction-offsets*))

(defn find-same-piece-on-dire [dire-offset piece [x y] border]
  (loop [offseted-x x
         offseted-y y]
    (let [grid (gridth [offseted-x offseted-y] border)]
      (cond (= grid piece)
            [offseted-x offseted-y]
            (empty-grid? grid)
            nil
            (in-border? [offseted-x offseted-y] border)
            (recur (+ offseted-x (first dire-offset))
                   (+ offseted-y (second dire-offset)))
            :else nil))))


(defn position-dire-offset [pos target-pos]
  (let [offset (mapv - pos target-pos)]
    (mapv (fn [ofval]
            (cond (> ofval 0) 1
                  (< ofval 0) -1
                  :else 0))
          offset)))

(defn assoc-border [grid target-pos border]
  (assoc-in border
            (vec (reverse target-pos))
            grid))

(defn reversi-line
  [piece target-pos [x y] border
   & {:keys [on-reversi-a-piece] :or {on-reversi-a-piece (fn [[revering-x reversing-y]])}}]
  (let [target-dire
        (position-dire-offset target-pos [x y])]
    (loop [cur-pos [x y]
           b border]
      (when (in-border? cur-pos b)
        (on-reversi-a-piece cur-pos)
        (if (= cur-pos target-pos)
          (assoc-border piece cur-pos b)
          (recur (mapv + target-dire cur-pos)
                 (assoc-border piece cur-pos b)))))))

(defn find-reversiable-lines [piece [x y] border]
  (when (in-empty-grid? [x y] border)
    (let [nearby-nonsame-color-dire-offsets
          (nearby-color-piece-dire-offsets
           (another-color-piece piece) [x y] border)]
      (if-not (empty? nearby-nonsame-color-dire-offsets)
        (let [target-posis
              (reduce (fn [m offset]
                        (let [offsetd-position (mapv + [x y] offset)
                              target-posi (find-same-piece-on-dire offset
                                                                   piece
                                                                   offsetd-position
                                                                   border)]
                          (if-not (nil? target-posi)
                            (cons target-posi m)
                            m)))
                      '()
                      nearby-nonsame-color-dire-offsets)]
          target-posis)))))

(defn can-reversi? [piece [x y] border]
  (when (in-empty-grid? [x y] border)
    (let [nearby-nonsame-color-dire-offsets
          (nearby-color-piece-dire-offsets
           (another-color-piece piece) [x y] border)]
      (loop [offsets nearby-nonsame-color-dire-offsets]
        (if-not (empty? offsets)
          (let [offset (first offsets)
                offseted-position (mapv + [x y] offset)
                target-posi (find-same-piece-on-dire offset
                                                     piece
                                                     offseted-position
                                                     border)]
            (if-not (nil? target-posi)
              true
              (recur (rest offsets)))))))))

(defn add-possible-empty-grids [possible-empty-grids [x y] border]
  (let [nearby-empty-grid-dire-offsets
        (nearby-color-piece-dire-offsets *empty-grid* [x y] border)
        new-possible-empty-grids
        (map (fn [offset] (mapv + offset [x y]))
             nearby-empty-grid-dire-offsets)]
    (apply conj possible-empty-grids
           new-possible-empty-grids)))

(defn all-empty-grids [border]
  (apply concat
         (keep-indexed (fn [y x-line]
                         (keep-indexed (fn [x grid]
                                         (if (empty-grid? (gridth [x y] border))
                                           [x y]))
                                       x-line))
                       border)))

(defn find-putable-empty-grids
  ;; search each empty grids
  ([piece border]
     (if (piece? piece)
       (filter (fn [empty-grid]
                 (can-reversi? piece empty-grid border))
               (all-empty-grids border))))
  ;; only search possible-empty-grids
  ([piece possible-empty-grids border]
     (if (piece? piece)
       (filter (fn [empty-grid]
                 (can-reversi? piece empty-grid border))
               possible-empty-grids))))

(defn put-piece
  [piece [x y] border
   & {:keys [on-reversi-a-piece] :or {on-reversi-a-piece (fn [[x y]])}}]
  (let [target-posis (find-reversiable-lines piece [x y] border)]
    (if-not (empty? target-posis)
      (reduce (fn [b tposi]
                (reversi-line piece tposi [x y] b
                              :on-reversi-a-piece on-reversi-a-piece))
              border target-posis))))
