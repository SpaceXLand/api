// Prevent incorrect input
import lowerCase from 'lower-case';

/**
 * Builds Mongo projection object to show/hide document id field
 * @param {Object} query Koa querystring object from ctx.request
 * @return {Object} Mongo compatible projection object
 */

export default q => {
  const query: any = {};

  if (lowerCase(q.id) !== 'true') {
    // Mongo _id field requires underscore dangle
    // eslint-disable-next-line no-underscore-dangle
    query._id = 0;
  }

  return query;
};
