export const collection = 'launch';

const parsePayloadObj = payload => ({ ...payload, id: payload.payload_id });

export const parsePayloads = (data, query) => {
  const payloads = [];
  let match;
  data.forEach(launch => {
    launch.rocket.second_stage.payloads.forEach(payloadObj => {
      let payload = parsePayloadObj(payloadObj);
      match = 0;
      if (Object.keys(query).length !== 0) {
        Object.entries(query).forEach(([key, value]) => {
          if (value === payload[key]) {
            match += 1;
          }
        });
        if (match === Object.keys(query).length) {
          payloads.push(payload);
        }
      } else {
        payloads.push(payload);
      }
    });
  });
  return payloads;
};

export const parsePayload = (payload, payload_id) => {
  if (!payload) return null;
  const { payloads } = payload.rocket.second_stage;
  let index = 0;
  const parsedPayloads = payloads.map((payloadObj, i) => {
    let payload = parsePayloadObj(payloadObj);
    if (payload.id === payload_id) {
      index = i;
    }
    return payload;
  });
  return parsedPayloads[index];
};
