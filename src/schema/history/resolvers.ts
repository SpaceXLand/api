import { QueryResolvers } from '../../types/types';

const collection = 'history';
const Query: QueryResolvers.Resolvers = {
  histories: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  history: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: parseInt(id) })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
