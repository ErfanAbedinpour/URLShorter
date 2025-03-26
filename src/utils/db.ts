import Redis from "ioredis";

export function createRedisConnection(): Redis {
	const redis = new Redis({ host: "localhost" });
	return redis;
}
