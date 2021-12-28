import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express, { Express } from 'express';
import * as TypeGraphQL from 'type-graphql';
import { Container } from 'typedi';
import { HelloResolver } from './modules/hello/hello.resolver';
import { Context } from './types/Context';

export class Application {
  static async create(): Promise<Express> {
    // Create express app
    const app = express();

    // Apply express middleware
    app.use(
      cors({
        origin: process.env.WEB_FRONTEND_URL,
        credentials: true,
      })
    );
    app.use(express.json());

    // Healthcheck
    app.get('/api/health-check', (_, res) => res.sendStatus(200));

    // Build TypeGraphQL executable schema
    const schema = await TypeGraphQL.buildSchema({
      resolvers: [HelloResolver],
      container: Container,
      // validate: true,
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
    // await server.start()
    await server.start();
    // apply middleware to server
    server.applyMiddleware({ app });

    return app;
  }
}
