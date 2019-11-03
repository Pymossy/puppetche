const {promisify} = require('util');
const client = require('./client').getClient();

const get = promisify(client.get).bind(client);
const set = client.set.bind(client);

const RENDER_EXPIRE_TIME = 24 * 60 * 60;
const CACHE_PREFIX = 'puppetche-';

/**
 * 
 * @param {string} url
 * @returns {Promise<*>} 
 */
const getFromCache = (url) => {
    return get(CACHE_PREFIX + url).then((result) => {
        if(!result){
            return Promise.reject();
        }
        return result;
    });
};

/**
 * 
 * @param {string} url 
 * @param {string} result 
 * @returns {boolean}
 */
const cacheTheResult = (url, result) => {
    set(CACHE_PREFIX + url, result, "EX", RENDER_EXPIRE_TIME);
    return true;
};

module.exports = { getFromCache, cacheTheResult };