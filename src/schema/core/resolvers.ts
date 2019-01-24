import { QueryResolvers } from '../../types/types';
import { parseCores } from './utils';

const collection = 'core';
const Query: QueryResolvers.Resolvers = {
  cores: async (obj, { find, offset, order, sort, limit }, context) => {
    let null_dates = [];
    if (!find || (find && !find.original_launch)) {
      null_dates = await context.db
        .collection(collection)
        .find({
          original_launch: null,
          ...context.find({ query: { ...find }, collection })
        })
        .sort(context.sort({ query: { order, sort }, collection }))
        .skip(context.offset({ offset }))
        .limit(context.limit({ limit }))
        .map(parseCores)
        .toArray();
    }
    const not_null_dates = await context.db
      .collection(collection)
      .find({
        original_launch: { $ne: null },
        ...context.find({ query: { ...find }, collection })
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCores)
      .toArray();

    let data = null;
    if (context.order({ order }) === -1) {
      data = null_dates.concat(not_null_dates);
    } else {
      data = not_null_dates.concat(null_dates);
    }

    if (limit) {
      return data.slice(0, limit);
    } else {
      return data;
    }
  },
  coresPast: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find({
        original_launch: { $ne: null },
        ...context.find({ query: { ...find }, collection })
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCores)
      .toArray();
    return data;
  },
  coresUpcoming: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find({
        original_launch: null,
        ...context.find({ query: { ...find }, collection })
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCores)
      .toArray();
    return data;
  },
  core: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ core_serial: id })
      .limit(1)
      .map(parseCores)
      .toArray();
    return data;
  }
};

export default { Query };
