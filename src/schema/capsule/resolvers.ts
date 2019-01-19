import { QueryResolvers } from '../../types/types';

const collection = 'capsule';
const url = `/v3/capsules`;
const Query: QueryResolvers.Resolvers = {
  capsules: async (obj, { find, offset, order, sort, limit }, context) => {
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
  capsulesPast: async (obj, { find, offset, order, sort, limit }, context) => {
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
  capsulesUpcoming: async (
    obj,
    { find, offset, order, sort, limit },
    context
  ) => {
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
  capsule: async (obj, { capsule_serial }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ capsule_serial })
      .limit(1)
      .toArray();
    return data;
  }
};

export default { Query };
