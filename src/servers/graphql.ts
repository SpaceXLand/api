import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import graphqlHTTP from 'express-graphql';
import depthLimit from 'graphql-depth-limit';
import { createComplexityLimitRule } from 'graphql-validation-complexity';

export default (app, { schema, context }) => {
  const graphql = new ApolloServer({
    schema,
    context,
    engine: {
      apiKey: process.env.ENGINE_API_KEY
    },
    validationRules: [depthLimit(10), createComplexityLimitRule(1000)],
    introspection: true
  });

  app.get(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

  const buildPath = path.join(process.cwd(), 'build');

  //expose graphqli-explorer
  app.use('/', express.static(buildPath));
  app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath + '/index.html'));
  });

  graphql.applyMiddleware({
    app
  });
};
