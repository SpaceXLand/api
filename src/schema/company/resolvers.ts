import { QueryResolvers } from '../../types/types';

const collection = 'info';
const Query: QueryResolvers.Resolvers = {
  company: async (obj, args, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ name: 'SpaceX' })
      .toArray();
    return data;
  }
};

export default { Query };
