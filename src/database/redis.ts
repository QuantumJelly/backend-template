import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error(`Error: ${err}`);
});

export const setupRedis = async () => {
  await redisClient.connect();
};

export default redisClient;
