import { parseRocket } from '../utils';

export const LaunchRocket = {
  rocket: async ({ rocket_id }, args, context) => {
    const [data] = await context.db
      .collection('rocket')
      .find({ id: rocket_id })
      .limit(1)
      .map(parseRocket)
      .toArray();
    return data;
  }
};
