import { QueryResolvers } from '../../../types/types';
import { collection, parseLaunchpad } from '../utils';

export const Query: QueryResolvers.Resolvers = {
  launchpads: async (obj, { id, limit, offset }, context) => {
    const data = await context.db
      .collection(collection)
      .find({})
      .project(context.project({ id }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunchpad)
      .toArray();
    return data;
  },
  launchpad: async (obj, { pad, id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: pad })
      .project(context.project({ id }))
      .limit(1)
      .map(parseLaunchpad)
      .toArray();
    return data;
  }
};
