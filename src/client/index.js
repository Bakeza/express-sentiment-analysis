import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const CACHE_NAME = "cache-v1";
const urlsToCache = [
  "/",
  "/views/index.html",
  "/js/formHandler.js",
  "./styles/base.scss",
  "./styles/footer.scss",
  "./styles/form.scss",
  "./styles/header.scss",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
