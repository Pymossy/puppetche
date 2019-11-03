const express = require('express');
const { cacheTheResult, getFromCache } = require('./cache/cache-service');
const render = require('./renderer/render');

const PORT = 8090;
const app = express();

app.get('/render/:url', (req, res) => {
    const { url, } = req.params;
    getFromCache(url)
        .then(result => {
            console.log('from cache, ', url);
            return res.status(200).send(result)
        })
        .catch(() => {
            render(url)
                .then((result) => {
                    cacheTheResult(url, result);
                    return res.status(200).send(result);
                })
                .catch((err) => {
                    return res.status(500).send("There is a problem " + err);
                })
        })
});


app.listen(PORT, () => {
    console.log('im listening on %d', PORT);
});