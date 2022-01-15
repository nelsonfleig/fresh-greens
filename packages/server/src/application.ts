import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import config from 'config';
import cors from 'cors';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
// import helmet from 'helmet';
import * as TypeGraphQL from 'type-graphql';
import { Service } from 'typedi';
import * as TypeORM from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import cookieParser from 'cookie-parser';
import { resolvers } from './modules';
import { CustomAuthChecker } from './modules/core/auth-checker/auth-checker';
import { JwtService } from './modules/core/jwt/jwt.service';
import { Role } from './modules/user/types/role.enum';
import { Context } from './ts/types/context.type';
import { UserJwt } from './ts/types/user-jwt.type';
import logger from './utils/logger';

TypeORM.useContainer(Container);

/**
 * Application Singleton
 */
@Service()
export class Application {
  constructor(
    private readonly customAuthChecker: CustomAuthChecker,
    private readonly jwtService: JwtService
  ) {}

  async start(): Promise<void> {
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
    app.use(cookieParser());
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

    // Healthcheck
    app.get('/api/health-check', (_, res) => res.sendStatus(200));

    // Apply Apollo graphql server
    await this.applyApollo(app);

    const port = config.get('port');
    app.listen(port, () => {
      logger.info(`🚀 Server started on port ${port}`);
    });
  }

  private async applyApollo(app: express.Express) {
    // Register enums
    TypeGraphQL.registerEnumType(Role, {
      name: 'Role',
      description: 'User role',
    });

    // Build TypeGraphQL executable schema
    const schema = await TypeGraphQL.buildSchema({
      resolvers,
      container: Container,
      authChecker: this.customAuthChecker.check,
      validate: true,
    });

    const server = new ApolloServer({
      schema,
      context: (ctx: Context) => {
        const accessToken = ctx.req.cookies?.accessToken;
        if (accessToken) {
          const decodedUser = this.jwtService.verifyJwt<UserJwt>(
            accessToken,
            'accessTokenPublicKey'
          );
          ctx.user = decodedUser;
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
    server.applyMiddleware({
      app,
      cors: {
        origin: config.get('frontendUrl'),
        credentials: true,
      },
    });
  }

  private async connectDb(): Promise<void> {
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
