import { QueryResolvers } from '../../types/types';

const collection = 'core';
const url = `/v3/cores`;
const Query: QueryResolvers.Resolvers = {
  cores: async (obj, { find, offset, order, sort, limit }, context) => {
    let null_dates = [];
    if (!find || (find && !find.original_launch)) {
      null_dates = await context.db
        .collection(collection)
        .find({
          original_launch: null,
          ...context.find({ query: { ...find }, url })
        })
        .sort(context.sort({ query: { order, sort }, url }))
        .skip(context.offset({ offset }))
        .limit(context.limit({ limit }))
        .toArray();
    }
    const not_null_dates = await context.db
      .collection(collection)
      .find({
        original_launch: { $ne: null },
        ...context.find({ query: { ...find }, url })
      })
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
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
        ...context.find({ query: { ...find }, url })
      })
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  coresUpcoming: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find({
        original_launch: null,
        ...context.find({ query: { ...find }, url })
      })
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  },
  core: async (obj, { core_serial }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ core_serial })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
