export const collection = 'launch';
export const url = `/v3/payloads`;

// TOCHECK
export const parsePayloads = (data, query) => {
  const payloads = [];
  let match;
  data.forEach(launch => {
    launch.rocket.second_stage.payloads.forEach(payload => {
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

// TOCHECK
export const parsePayload = (payload, payload_id) => {
  if (!payload) return null;
  const { payloads } = payload.rocket.second_stage;
  let index = 0;
  payloads.forEach((payload, i) => {
    if (payload.payload_id === payload_id) {
      index = i;
    }
  });
  return payloads[index];
};
