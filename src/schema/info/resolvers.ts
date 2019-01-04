import { QueryResolvers } from '../../types/types';

const collection = 'info';
const Query: QueryResolvers.Resolvers = {
  info: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({})
      .project(context.project({ id }))
      .toArray();
    return data;
  },
  api: async (obj, args, context) => {
    const [data] = await context.db
      .collection('home')
      .find({})
      .project({ _id: 0 })
      .toArray();
    return data;
  }
};

export default { Query };
