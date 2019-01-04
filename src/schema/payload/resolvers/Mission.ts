import { collection, parsePayload } from '../utils';

export const Mission = {
  payloads: async ({ payload_ids }, args, context) => {
    return payload_ids.map(async payload_id => {
      const [data] = await context.db
        .collection(collection)
        .find({ 'rocket.second_stage.payloads.payload_id': payload_id })
        .project({
          _id: 1,
          'rocket.second_stage.payloads': 1,
          flight_number: 1
        })
        .limit(1)
        .toArray();

      return parsePayload(data, {});
    });
  }
};
