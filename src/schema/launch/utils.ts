export const collection = 'launch';
export const parseLaunch = ({ reuse, flight_number, ...parsedLaunch }) => ({
  ...parsedLaunch,
  id: flight_number
});
