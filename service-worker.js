const CACHE_NAME = "wallet-app-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html"
];


// نصب سرویس ورکر
self.addEventListener("install", function(event){

  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      return cache.addAll(FILES_TO_CACHE);
    })
  );

});


// فعال شدن
self.addEventListener("activate", function(event){

  event.waitUntil(
    self.clients.claim()
  );

});


// کنترل درخواست‌ها
self.addEventListener("fetch", function(event){

  event.respondWith(

    caches.match(event.request)
    .then(function(response){

      return response || fetch(event.request);

    })

  );

});
