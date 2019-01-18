import { QueryResolvers } from '../../types/types';

const collection = 'rocket';

const Query: QueryResolvers.Resolvers = {
  rockets: async (obj, { limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find({})
      .sort({ first_flight: 1 })
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseRockets)
      .toArray();
    return data;
  },
  rocket: async (obj, { rocket }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: rocket })
      .limit(1)
      .map(parseRockets)
      .toArray();
    return data;
  }
};

const parseRockets = rocket => {
  rocket.rocket_id = rocket.id;
  rocket.id = rocket.rocketid;
  rocket.rocket_name = rocket.name;
  rocket.rocket_type = rocket.type;
  const { rocketid, name, type, ...rocketParsed } = rocket;
  return rocketParsed;
};

export default { Query };
