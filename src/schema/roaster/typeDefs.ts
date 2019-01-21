import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    roadster: Roadster
  }

  type Roadster {
    apoapsis_au: Float
    details: String
    earth_distance_km: Float
    earth_distance_mi: Float
    eccentricity: Float
    epoch_jd: Float
    inclination: Float
    launch_date_unix: Date
    launch_date_utc: Date
    launch_mass_kg: Int
    launch_mass_lbs: Int
    longitude: Float
    mars_distance_km: Float
    mars_distance_mi: Float
    name: String
    norad_id: Int
    orbit_type: Float
    periapsis_arg: Float
    periapsis_au: Float
    period_days: Float
    semi_major_axis_au: Float
    speed_kph: Float
    speed_mph: Float
    wikipedia: String
  }
`;
export default typeDefs;
