import { collection, parseLaunch } from '../utils';
import {
  QueryResolvers,
  Launch,
  LaunchesPastResult
} from '../../../types/types';

export const Query: QueryResolvers.Resolvers = {
  launches: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchesPast: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find({
        upcoming: false,
        ...context.find({ query: { ...find }, collection })
      })
      .sort({
        ...context.sort({ query: { order, sort }, collection }),
        flight_number: -1
      })
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchesPastResult: async (
    obj,
    { find, offset, order, sort, limit },
    context
  ): Promise<LaunchesPastResult> => {
    const data: [Launch] = await context.db
      .collection(collection)
      .find({
        upcoming: false,
        ...context.find({ query: { ...find }, collection })
      })
      .sort({
        ...context.sort({ query: { order, sort }, collection }),
        flight_number: -1
      })
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    const { length: totalCount }: [Launch] = await context.db
      .collection(collection)
      .find({
        upcoming: false
      })
      .toArray();

    return { data, result: { totalCount, count: data.length } };
  },
  launchesUpcoming: async (
    obj,
    { find, offset, order, sort, limit },
    context
  ) => {
    const data = await context.db
      .collection(collection)
      .find({
        upcoming: true,
        ...context.find({ query: { ...find }, collection })
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launch: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ flight_number: parseInt(id) })
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchLatest: async (obj, { offset }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ upcoming: false })
      .sort({ flight_number: -1 })
      .skip(context.offset({ offset }))
      .limit(1)
      .map(parseLaunch)
      .toArray();

    return data;
  },
  launchNext: async (obj, { offset }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ upcoming: true })
      .sort({ flight_number: 1 })
      .skip(context.offset({ offset }))
      .limit(1)
      .map(parseLaunch)
      .toArray();

    return data;
  }
};
