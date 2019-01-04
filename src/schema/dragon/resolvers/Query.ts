import { QueryResolvers } from '../../../types/types';
import { collection } from '../utils';

export const Query: QueryResolvers.Resolvers = {
  dragons: async (obj, { id, limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find({})
      .project(context.project({ id }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  dragon: async (obj, { capsule, id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: capsule })
      .project(context.project({ id }))
      .limit(1)
      .toArray();
    return data;
  }
};
