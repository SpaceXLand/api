import { QueryResolvers } from '../../types/types';
import { collection, url, parseShips } from './utils';

const Query: QueryResolvers.Resolvers = {
  ships: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, url }))
      .sort(context.sort({ query: { order, sort }, url }))
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
