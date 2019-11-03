const redis = require('redis');

const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_DB = process.env.REDIS_DB || 0;

let client;

/**
 * @returns {RedisClient}
 */
const getClient = () => {
    if (!client) {
        client = redis.createClient({
            host: REDIS_HOST,
            password: REDIS_PASSWORD,
            db: REDIS_DB,
        });
    }
    return client;
};

module.exports = { getClient };