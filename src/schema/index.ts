// import { makeExecutableSchema } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { rateLimit } from "../utils";
import {
  makeExecutableSchema,
  makeRemoteExecutableSchema,
  introspectSchema,
  mergeSchemas
} from "graphql-tools";
import fetch from "node-fetch";
import { HttpLink } from "apollo-link-http";

const uri = process.env.X_HASURA_URL;
const headers = {
  "x-hasura-admin-secret": process.env.X_HASURA_ADMIN_SECRET
};

const link = new HttpLink({
  uri,
  headers,
  fetch
});

export default async () => {
  const remoteSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(link),
    link
  });

  const localSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
      rateLimit
    }
  });

  const schema = mergeSchemas({
    schemas: [remoteSchema, localSchema]
  });

  return schema;
};
