const Redis = require("ioredis");

const redis = new Redis({
  host: "articles-cache.xxxxxx.ng.0001.use1.cache.amazonaws.com", 
  port: 6379, 
});

const setCache = async (key, value, ttl = 3600) => {
  try {
    await redis.set(key, JSON.stringify(value), "EX", ttl); 
    console.log(`Cache set for key: ${key}`);
  } catch (error) {
    console.error(`Error setting cache for key: ${key}`, error);
  }
};

const getCache = async (key) => {
  try {
    const value = await redis.get(key);
    if (value) {
      console.log(`Cache hit for key: ${key}`);
      return JSON.parse(value);
    }
    console.log(`Cache miss for key: ${key}`);
    return null;
  } catch (error) {
    console.error(`Error getting cache for key: ${key}`, error);
    return null;
  }
};

module.exports = { setCache, getCache };