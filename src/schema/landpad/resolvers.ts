import { QueryResolvers } from '../../types/types';

const collection = 'landpad';
const url = `/v3/landpads`;
const Query: QueryResolvers.Resolvers = {
  landpads: async (obj, { id, limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({}))
      .project(context.project({ id }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  landpad: async (obj, { landpad_id, id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: landpad_id })
      .project(context.project({ id }))
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
