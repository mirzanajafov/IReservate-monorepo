import { Provider } from '@nestjs/common';
import Redis from 'ioredis';

export const REDIS = Symbol('REDIS');

export const RedisProvider: Provider = {
   provide: REDIS,
   useFactory: (): Redis => new Redis({ host: '127.0.0.1', port: 6379 }),
};
