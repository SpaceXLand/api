import { ApolloServer } from 'apollo-server-express';
import schema from '../schema';
import ctx from '../context';
import depthLimit from 'graphql-depth-limit';

export default (app, db) => {
  const context = { ...ctx, db };

  const graphql = new ApolloServer({
    schema,
    context,
    engine: {
      apiKey: process.env.ENGINE_API_KEY
    },
    validationRules: [depthLimit(10)],
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
