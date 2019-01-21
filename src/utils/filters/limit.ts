/**
 * Returns number to limit documents in mongo query
 * @param {Object} query Koa querystring object from ctx.request
 * @return {number} Number of documents to limit
 */

export default query => {
  let limit = null;

  if (query.limit) {
    limit = parseInt(query.limit, 10);
  } else {
    limit = 0;
  }

  return limit;
};
