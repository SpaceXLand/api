import express from 'express';
import { getDB } from './context/db';
import graphql from './servers/graphql';
import rest from './servers/rest';

(async () => {
  const port = process.env.PORT || 4000;
  const app = express();
  const db = await getDB();

  graphql(app, db);
  rest(app, db);

  app.listen({ port }, () => {
    console.log(`🚀  Server ready http://localhost:${port}`);
  });
})();
