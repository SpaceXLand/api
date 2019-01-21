/**
 * Returns number to offset documents in mongo query
 * @param {Object} query Koa querystring object from ctx.request
 * @return {number} Number of documents to skip
 */

export default query => {
  let offset = null;

  if (query.offset) {
    offset = parseInt(query.offset, 10);
  } else {
    offset = 0;
  }

  return offset;
};
