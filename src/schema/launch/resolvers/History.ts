import { collection } from '../utils';

export const History = {
  flight: async ({ flight_number }, args, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ flight_number })
      .project(context.project({ id: true }))
      .limit(1)
      .toArray();
    return data;
  }
};
