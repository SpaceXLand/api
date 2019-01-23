import { collection } from '../utils';

export const Capsule = {
  dragon: async ({ capsule_id }, args, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: capsule_id })
      .limit(1)
      .toArray();
    return data;
  }
};
