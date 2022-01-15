const typeormConfig = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'fresh-greens',
  synchronize: true,
  logging: true,
  entities: ['src/modules/**/*.entity.ts'],
  migrations: ['src./migrations/**/*.ts'],
  subscribers: ['src./subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};

export default typeormConfig;
