import { QueryResolvers } from '../../types/types';

const collection = 'mission';
const url = `/v3/missions`;
const Query: QueryResolvers.Resolvers = {
  missions: async (obj, { find, limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  mission: async (obj, { mission_id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ mission_id })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
