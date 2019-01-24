import { collection, parsePayloads, parsePayload } from '../utils';
import { QueryResolvers } from '../../../types/types';

export const Query: QueryResolvers.Resolvers = {
  payloads: async (obj, { find, offset, order, sort, limit }, context) => {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .project({
        _id: 0,
        'rocket.second_stage.payloads': 1,
        flight_number: 1
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();

    return parsePayloads(data, { ...find });
  },
  payload: async (obj, { id }, context) => {
    const [data] = await context.db
      .collection(collection)
      .find({ 'rocket.second_stage.payloads.payload_id': id })
      .project({
        _id: 0,
        'rocket.second_stage.payloads': 1,
        flight_number: 1
      })
      .limit(1)
      .toArray();

    return parsePayload(data, {});
  }
};
