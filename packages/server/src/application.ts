import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import config from 'config';
import cors from 'cors';
import express, { Express } from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
// import helmet from 'helmet';
import * as TypeGraphQL from 'type-graphql';
import { Service } from 'typedi';
import * as TypeORM from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { resolvers } from './modules';
import { User } from './modules/user/user.entity';
import { Context } from './ts/types/context.type';
import { verifyJwt } from './utils/jwt.utils';
import logger from './utils/logger';

TypeORM.useContainer(Container);

/**
 * Application Singleton
 */
@Service()
export class Application {
  private static app: Express;

  static async create(): Promise<Express> {
    if (this.app) return this.app;

    // Connect to DB
    await this.connectDb();

    // Create express app
    const app = express();

    // Apply express middleware
    app.use(
      cors({
        origin: config.get('frontendUrl'),
        credentials: true,
      })
    );
    // app.use(helmet());
    app.use(express.json());
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

    // Healthcheck
    app.get('/api/health-check', (_, res) => res.sendStatus(200));

    // Build TypeGraphQL executable schema
    const schema = await TypeGraphQL.buildSchema({
      resolvers,
      container: Container,
      validate: true,
    });

    const server = new ApolloServer({
      schema,
      context: (ctx: Context) => {
        const accessToken = (ctx.req.headers.authorization || '').replace(/^Bearer\s/, '');
        if (accessToken) {
          const user = verifyJwt<User>(accessToken, 'accessTokenPublicKey');
          ctx.user = user;
        }
        return ctx;
      },
      plugins: [
        process.env.NODE_ENV === 'production'
          ? ApolloServerPluginLandingPageProductionDefault()
          : ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });
    // start the apollo server
    await server.start();
    // apply middleware to server
    server.applyMiddleware({ app });

    this.app = app;
    return app;
  }

  private static async connectDb(): Promise<void> {
    try {
      // Get options for current environment
      const typeormOptions = config.get<PostgresConnectionOptions>('typeorm');
      await TypeORM.createConnection({
        ...typeormOptions,
      });
      logger.info('DB connected');
    } catch (error) {
      logger.error(error);
    }
  }
}
