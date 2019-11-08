# Puppetche
A Prerender with cache based on https://github.com/GoogleChrome/puppeteer to serve your pages to crawlers

**Puppetche** is a nodejs web app with `express.js` that uses *Puppeteer* to render web pages on server.
**Puppetche** also uses `redis` to cache rendered pages to reponde crawlers faster.

### To Run:
**Puppetche** could run by:
```
docker-compose up -d
```
### To use:
**puppetche** exposes this url:
```
http://localhost:8090/render/https%3A%2F%2Fgoogle.com%2F
```

You could change the port in `docker-compose.yml` file.