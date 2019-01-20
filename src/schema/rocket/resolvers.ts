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
      .toArray();
    return data;
  },
  rocket: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
