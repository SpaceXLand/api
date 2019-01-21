import { collection, parseLaunch } from '../utils';

export const History = {
  flight: async ({ flight_number }, args, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ flight_number })
      .limit(1)
      .map(parseLaunch)
      .toArray();
    return data;
  }
};
