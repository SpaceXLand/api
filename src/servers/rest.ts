import sofa, { OpenAPI } from 'sofa-api';
import schema from '../schema';
import ctx from '../context';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

export default (app, db) => {
  const context = { ...ctx, db };
  const openApi = OpenAPI({
    schema,
    info: {
      title: 'SpaceX Rest API'
    }
  });

  const basePath = '/rest';

  app.use(
    basePath,
    sofa({
      schema,
      context,
      onRoute(info) {
        openApi.addRoute(info, { basePath });
      }
    })
  );

  // writes every recorder route
  openApi.save('./swagger.json');

  // expose rest docs
  app.use(basePath, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
