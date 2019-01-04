import { QueryResolvers } from '../../types/types';

const collection = 'history';
const url = `/v3/history`;
const Query: QueryResolvers.Resolvers = {
  histories: async (obj, { find, id, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, url }))
      .project(context.project({ id }))
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  history: async (obj, { history_id, id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: history_id })
      .project(context.project({ id }))
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
