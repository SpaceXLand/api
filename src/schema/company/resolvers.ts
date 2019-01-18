import { QueryResolvers } from '../../types/types';

const collection = 'info';
const Query: QueryResolvers.Resolvers = {
  company: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ name: 'SpaceX' })
      .project(context.project({ id }))
      .toArray();
    return data;
  }
};

export default { Query };
