import express from "express";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import graphqlHTTP from "express-graphql";
import depthLimit from "graphql-depth-limit";
import { createComplexityLimitRule } from "graphql-validation-complexity";

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

  const buildPath = path.join(process.cwd(), "build");

  // expose graphqli-explorer
  app.use("/graphql", express.static(buildPath));
  app.get("/graphql", (req, res) => {
    res.sendFile(path.join(buildPath + "/index.html"));
  });

  // graphql api by default
  app.get("/", (_, res) => {
    res.redirect(graphql.graphqlPath);
  });

  graphql.applyMiddleware({
    app
  });
};
