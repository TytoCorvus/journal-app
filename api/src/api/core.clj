(ns api.core
  (:gen-class)
  (:require [compojure.core :as compoj]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.params :refer :all]
            [ring.middleware.keyword-params :refer :all]))

(def example-route
  (compoj/GET "/example" [] (fn [req] req)))

(def root-handler
  (compoj/GET "/" []
    {:status 200
     :headers {"Content-Type" "text/plain"}
     :body "Hello, World!"}))

(def root-route
  (compoj/context "" []
    root-handler
    example-route
    (compoj/context "/context" []
      example-route)))

(compoj/defroutes app-routes
  (-> root-route
      wrap-keyword-params
      wrap-params))

(defn start-server
  "Start the server"
  [server-options]
  (jetty/run-jetty app-routes server-options))

(defn -main
  "I start our web server!"
  []
  (start-server {:port 3000}))

(comment
  (start-server {:port 3000})
  (app-routes {:uri "/example"
               :request-method :get})
  (+ 100 87))



