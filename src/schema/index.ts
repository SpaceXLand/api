import { makeExecutableSchema } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import createRateLimitDirective from 'graphql-rate-limit';

const GraphQLRateLimit = createRateLimitDirective({
  identifyContext: ctx => {
    return ctx.user && ctx.user.id;
  },
  formatError: ({ fieldName }) => {
    return `Woah there ✋, you are doing way too much ${fieldName}`;
  }
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    rateLimit: GraphQLRateLimit
  }
});

export default schema;
