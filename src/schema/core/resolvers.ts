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
          ...context.find({ query: { ...find }, url }),
          original_launch: null
        })
        .sort(context.sort({ query: { order, sort }, url }))
        .skip(context.offset({ offset }))
        .limit(context.limit({ limit }))
        .toArray();
    }
    const not_null_dates = await context.db
      .collection(collection)
      .find({
        ...context.find({ query: { ...find }, url }),
        original_launch: { $ne: null }
      })
      .sort(context.sort({ query: { order, sort }, url }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();

    if (context.order({ query: { order } }) === -1) {
      return null_dates.concat(not_null_dates);
    } else {
      return not_null_dates.concat(null_dates);
    }
  },
  coresPast: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find({
        ...context.find({ query: { ...find }, url }),
        original_launch: { $ne: null }
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
        ...context.find({ query: { ...find }, url }),
        original_launch: null
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
