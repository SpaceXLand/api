import { ApolloServer } from 'apollo-server-express';
import schema from '../schema';
import ctx from '../context';

export default (app, db) => {
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
};
