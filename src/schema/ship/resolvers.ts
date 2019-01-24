import { QueryResolvers } from '../../types/types';
import { collection, parseShips } from './utils';

const Query: QueryResolvers.Resolvers = {
  ships: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseShips)
      .toArray();
    return data;
  },
  ship: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ ship_id: id })
      .limit(1)
      .map(parseShips)
      .toArray();
    return data;
  }
};

export default { Query };
