import { DataSource } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const env = process.env.NODE_ENV;

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:
    env === 'test' ? process.env.DB_TEST_DATABASE : process.env.DB_DATABASE,
  synchronize: false,
  migrations: ['db/migrations/*.ts'],
  entities: ['entities/*.ts'],
  logging: true,
  name: 'default',
});
