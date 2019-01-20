export const collection = 'launch';
export const url = `/v3/launches`;
export const parseLaunch = ({ reuse, flight_number, ...parsedLaunch }) => ({
  ...parsedLaunch,
  id: flight_number
});
