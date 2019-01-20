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

const parseShips = ship => ({
  ...ship,
  id: ship.ship_id,
  name: ship.ship_name,
  model: ship.ship_model,
  type: ship.ship_type
});

export default { Query };
