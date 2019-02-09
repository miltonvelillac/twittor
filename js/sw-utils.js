// Guarda el cache dinamico
function actualizarCacheDinamico(dynamicCache, req, res) {
    if(res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        // En este punto fallo tanto la cache como la red
        return res;
    }
}
