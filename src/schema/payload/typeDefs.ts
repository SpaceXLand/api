import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    payloads(
      find: PayloadsFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Payload]
    payload(id: ID!): Payload
  }

  extend type Mission {
    payloads: [Payload]
  }

  type Payload {
    customers: [String]
    id: ID
    manufacturer: String
    nationality: String
    norad_id: [Int]
    orbit_params: PayloadOrbitParams
    orbit: String
    payload_mass_kg: Float
    payload_mass_lbs: Float
    payload_type: String
    reused: Boolean
  }

  type PayloadOrbitParams {
    apoapsis_km: Float
    arg_of_pericenter: Float
    eccentricity: Float
    epoch: Date
    inclination_deg: Float
    lifespan_years: Float
    longitude: Float
    mean_anomaly: Float
    mean_motion: Float
    periapsis_km: Float
    period_min: Float
    raan: Float
    reference_system: String
    regime: String
    semi_major_axis_km: Float
  }

  input PayloadsFind {
    apoapsis_km: Float
    customer: String
    eccentricity: Float
    epoch: Date
    inclination_deg: Float
    lifespan_years: Float
    longitude: Float
    manufacturer: String
    mean_motion: Float
    nationality: String
    norad_id: Int
    orbit: String
    payload_id: ID
    payload_type: String
    periapsis_km: Float
    period_min: Float
    raan: Float
    reference_system: String
    regime: String
    reused: Boolean
    semi_major_axis_km: Float
  }
`;
export default typeDefs;
