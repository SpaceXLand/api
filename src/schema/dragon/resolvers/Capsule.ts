import { collection } from '../utils';

export const Capsule = {
  capsule: async ({ capsule_id }, args, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ id: capsule_id })
      .project(context.project({ id: true }))
      .limit(1)
      .toArray();
    return data;
  }
};
