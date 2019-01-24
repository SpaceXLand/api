import { QueryResolvers } from '../../types/types';

const collection = 'capsule';
const Query: QueryResolvers.Resolvers = {
  capsules: async (obj, { find, offset, order, sort, limit }, context) => {
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
        .map(parseCapsules)
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
      .map(parseCapsules)
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
  capsulesPast: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find({
        original_launch: { $ne: null },
        ...context.find({ query: { ...find }, collection })
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCapsules)
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
        original_launch: null,
        ...context.find({ query: { ...find }, collection })
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCapsules)
      .toArray();
    return data;
  },
  capsule: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ capsule_serial: id })
      .limit(1)
      .map(parseCapsules)
      .toArray();
    return data;
  }
};
const parseCapsules = capsule => ({ ...capsule, id: capsule.capsule_serial });
export default { Query };
