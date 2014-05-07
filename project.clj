(defproject reversi "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2202"]
                 ;;[org.clojure/clojurescript "0.0-2156"]
                 [enlive "1.1.5"]
                 [compojure "1.1.6"]
                 [http-kit "2.1.18"]]
  :profiles {:uberjar {:aot :all}}
  :target-path "target/%s"
  :plugins [[lein-cljsbuild "1.0.3"]
            [com.cemerick/austin "0.1.5-SNAPSHOT"]]

  :source-paths ["src/clj" "src/cljs"]
  :main ^:skip-aot reversi.server

  :cljsbuild {
              :builds [{
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/reversi-phaser.js"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   ;; :optimizations :advanced
                                   ;; :externs ["resources/public/phaser.min.js"]
                                   }}]}
  :repl-options {:init-ns reversi.server}
  )
