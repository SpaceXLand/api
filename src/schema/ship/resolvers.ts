import { QueryResolvers } from '../../types/types';

const collection = 'ship';
const url = `/v3/ships`;
const Query: QueryResolvers.Resolvers = {
  ships: async (obj, { find, id, offset, order, sort, limit }, context) => {
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
  ship: async (obj, { ship_id, id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ ship_id })
      .project(context.project({ id }))
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
