export const collection = 'launchpad';

export const parseLaunchpad = pad => {
  pad.site_id = pad.id;
  pad.id = pad.padid;
  pad.site_name_long = pad.full_name;
  const { padid, full_name, ...padParsed } = pad;
  return padParsed;
};

export const parseRocket = rocket => {
  rocket.rocket_id = rocket.id;
  rocket.id = rocket.rocketid;
  rocket.rocket_name = rocket.name;
  rocket.rocket_type = rocket.type;
  const { rocketid, name, type, ...rocketParsed } = rocket;
  return rocketParsed;
};
