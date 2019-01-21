// Prevent incorrect input
import lowerCase from 'lower-case';

/**
 * Builds Mongo sort object to set sorting direction
 * @param {Object} query Koa querystring object from ctx.request
 * @return {number} Positive or negative number to indicate sort direction
 */

export default query => {
  let order;

  if (lowerCase(query.order) === 'asc') {
    order = 1;
  } else if (lowerCase(query.order) === 'desc') {
    order = -1;
  } else {
    order = 1;
  }

  return order;
};
