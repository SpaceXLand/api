import { ApolloServer } from 'apollo-server';
import schema from './schema';
import context from './context';
import { getDB } from './context/db';
(async () => {
  const db = await getDB();
  const server = new ApolloServer({
    schema,
    context: { ...context, db },
    engine: {
      apiKey: process.env.ENGINE_API_KEY
    }
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
