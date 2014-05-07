(ns reversi.server
  (:gen-class)
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET defroutes)]
            org.httpkit.server
            [clojure.java.io :as io]))

(enlive/deftemplate page
  (io/resource "index.html")
  []
  [:body] (enlive/append
            (enlive/html [:script (browser-connected-repl-js)])))

(defroutes site
  (resources "/")
  (GET "/*" req (page)))

(defn run
  []
  (defonce ^:private server
    (org.httpkit.server/run-server #'site {:port 8081 :join? false}))
  server)

(defn -main
  "run http server"
  [& args]
  (run))

(def repl-env)

(defn init-cljs-repl []
  (->> (reset! cemerick.austin.repls/browser-repl-env
               (cemerick.austin/repl-env))
       constantly
       (alter-var-root #'repl-env))
  ;; return nil to avoid printing and OOM
  nil)

(defn cljs-repl-run []
  (cemerick.austin.repls/cljs-repl reversi.server/repl-env))
