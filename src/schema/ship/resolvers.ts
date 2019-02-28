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
  shipsResult: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseShips)
      .toArray();
    const { length: totalCount } = await context.db
      .collection(collection)
      .find({})
      .toArray();
    return { data, result: { totalCount } };
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
