import sofa, { OpenAPI } from 'sofa-api';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

export default (app, { schema, context }) => {
  const openApi = OpenAPI({
    schema,
    info: {
      title: 'SpaceX REST API'
    }
  });

  const basePath = '/rest';

  app.use(cors());

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
