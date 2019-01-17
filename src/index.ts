import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import sofa, { OpenAPI } from 'sofa-api';
import schema from './schema';
import ctx from './context';
import { getDB } from './context/db';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

(async () => {
  const port = process.env.PORT || 4000;
  const app = express();

  const db = await getDB();
  const context = { ...ctx, db };

  const graphql = new ApolloServer({
    schema,
    context,
    engine: {
      apiKey: process.env.ENGINE_API_KEY
    },
    playground: true,
    introspection: true
  });

  graphql.applyMiddleware({
    app
  });

  // graphql api by default
  app.get('/', (_, res) => {
    res.redirect(graphql.graphqlPath);
  });

  const openApi = OpenAPI({
    schema,
    info: {
      title: 'SpaceX Rest API'
    }
  });

  const basePath = '/rest';

  app.use(
    basePath,
    sofa({
      schema,
      context,
      onRoute(info) {
        openApi.addRoute(info, { basePath });
      }
    })
  );

  // writes every recorder route
  openApi.save('./swagger.json');

  // expose rest docs
  app.use(basePath, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen({ port }, () => {
    console.log(`🚀  Server ready http://localhost:${port}`);
  });
})();
