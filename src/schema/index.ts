import { makeExecutableSchema } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { rateLimit } from '../utils';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    rateLimit
  }
});

export default schema;
