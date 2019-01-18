import { QueryResolvers } from '../../types/types';

const collection = 'landpad';
const url = `/v3/landpads`;
const Query: QueryResolvers.Resolvers = {
  landpads: async (obj, { limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({}))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  landpad: async (obj, { landpad_id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: landpad_id })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
