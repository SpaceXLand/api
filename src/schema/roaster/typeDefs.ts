import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    roadster: Roadster
  }

  type Roadster {
    name: String
    launch_date_utc: Date
    launch_date_unix: Date
    launch_mass_kg: Int
    launch_mass_lbs: Int
    norad_id: Int
    epoch_jd: Float
    orbit_type: Float
    apoapsis_au: Float
    periapsis_au: Float
    semi_major_axis_au: Float
    eccentricity: Float
    inclination: Float
    longitude: Float
    periapsis_arg: Float
    period_days: Float
    speed_kph: Float
    speed_mph: Float
    earth_distance_km: Float
    earth_distance_mi: Float
    mars_distance_km: Float
    mars_distance_mi: Float
    wikipedia: String
    details: String
  }
`;
export default typeDefs;
