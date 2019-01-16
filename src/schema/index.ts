import { makeExecutableSchema } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
