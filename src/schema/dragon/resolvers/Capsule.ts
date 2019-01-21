import { collection } from '../utils';

export const Capsule = {
  dragon: async ({ capsule_id: id }, args, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .toArray();
    return data;
  }
};
