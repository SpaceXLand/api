import { QueryResolvers } from '../../types/types';

const collection = 'info';
const Query: QueryResolvers.Resolvers = {
  roadster: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ name: "Elon Musk's Tesla Roadster" })
      .project(context.project({ id }))
      .toArray();
    return data;
  }
};

export default { Query };
