export const collection = 'launch';
export const url = `/v3/launches`;
export const parseLaunch = ({ reuse, ...parsedLaunch }) => parsedLaunch;
export const parseRocket = rocket => {
  rocket.rocket_id = rocket.id;
  rocket.id = rocket.rocketid;
  rocket.rocket_name = rocket.name;
  rocket.rocket_type = rocket.type;
  const { rocketid, name, type, ...parsedRocket } = rocket;
  return parsedRocket;
};
