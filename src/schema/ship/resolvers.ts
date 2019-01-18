import { QueryResolvers } from '../../types/types';

const collection = 'ship';
const url = `/v3/ships`;
const Query: QueryResolvers.Resolvers = {
  ships: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, url }))
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  ship: async (obj, { ship_id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ ship_id })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
