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
