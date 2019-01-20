export const collection = 'launchpad';

export const parseLaunchpad = pad => {
  pad.site_id = pad.id;
  pad.id = pad.padid;
  pad.site_name_long = pad.full_name;
  const { padid, full_name, ...padParsed } = pad;
  return padParsed;
};
