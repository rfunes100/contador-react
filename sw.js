const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./styles.css",
    "./components/Contado.js"
    

]

const CACHE_NAME = "V1_cache_contador_react"

self.addEventListener("install" , (e)  => {
 e.waitUntil(
     caches.open(CACHE_NAME).then(cache =>  {
         cache.addAll(CACHE_ELEMENTS).then( () => {
             self.skipWaiting()
         }).catch( err => console.log(err))
     })

 )
    console.log(e);
});


