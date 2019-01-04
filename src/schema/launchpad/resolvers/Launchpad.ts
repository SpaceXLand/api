import { parseRocket } from '../utils';

export const Launchpad = {
  vehicles_launched: async ({ vehicles_launched }, args, context) => {
    return vehicles_launched.map(async name => {
      const [data] = await context.db
        .collection('rocket')
        .find({ name })
        .project(context.project({ id: true }))
        .limit(1)
        .map(parseRocket)
        .toArray();
      return data;
    });
  }
};
