import config from 'config';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express, { Express } from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
import * as TypeGraphQL from 'type-graphql';
import { Container } from 'typedi';
import { ExampleResolver } from './modules/example/example.resolver';
import { Context } from './ts/types/Context';

export class Application {
  static async create(): Promise<Express> {
    // Create express app
    const app = express();

    // Apply express middleware
    app.use(
      cors({
        origin: config.get('frontendUrl'),
        credentials: true,
      })
    );
    app.use(express.json());
    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

    // Healthcheck
    app.get('/api/health-check', (_, res) => res.sendStatus(200));

    // Build TypeGraphQL executable schema
    const schema = await TypeGraphQL.buildSchema({
      resolvers: [ExampleResolver],
      container: Container,
      validate: true,
    });

    const server = new ApolloServer({
      schema,
      context: (ctx: Context) => ctx,
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

    return app;
  }
}
