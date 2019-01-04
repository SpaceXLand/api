import { collection, url, parseLaunch } from '../utils';
import { QueryResolvers } from '../../../types/types';

export const Query: QueryResolvers.Resolvers = {
  launches: async (obj, { find, offset, order, sort, limit, id }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, url }))
      .project(context.project({ id }))
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchesPast: async (
    obj,
    { find, offset, order, sort, limit, id },
    context
  ) => {
    const data = await context.db
      .collection(collection)
      .find({ upcoming: false, ...context.find({ query: { ...find }, url }) })
      .project(context.project({ id }))
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchesUpcoming: async (
    obj,
    { find, offset, order, sort, limit, id },
    context
  ) => {
    const data = await context.db
      .collection(collection)
      .find({ upcoming: true, ...context.find({ query: { ...find }, url }) })
      .project(context.project({ id }))
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launch: async (obj, { flight_number, id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ flight_number })
      .project(context.project({ id }))
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchLatest: async (obj, { id, offset }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ upcoming: false })
      .project(context.project({ id }))
      .sort({ flight_number: -1 })
      .skip(context.offset({ offset }))
      .limit(1)
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchNext: async (obj, { id, offset }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ upcoming: true })
      .project(context.project({ id }))
      .sort({ flight_number: 1 })
      .skip(context.offset({ offset }))
      .limit(1)
      .map(parseLaunch)
      .toArray();

    return data;
  }
};
