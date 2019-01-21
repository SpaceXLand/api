import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    ships(
      find: ShipsFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Ship]
    ship(id: ID!): Ship
  }

  extend type Launch {
    ships: [Ship]
  }

  type Ship {
    abs: Int
    active: Boolean
    attempted_landings: Int
    class: Int
    course_deg: Int
    home_port: String
    id: ID
    image: String
    imo: Int
    missions: [ShipMission]
    mmsi: Int
    model: String
    name: String
    position: ShipLocation
    roles: [String]
    speed_kn: Float
    status: String
    successful_landings: Int
    type: String
    url: String
    weight_kg: Int
    weight_lbs: Int
    year_built: Int
  }

  type ShipLocation {
    latitude: Float
    longitude: Float
  }

  type ShipMission {
    flight: String
    name: String
  }

  input ShipsFind {
    id: ID
    name: String
    model: String
    type: String
    role: String
    active: Boolean
    imo: Int
    mmsi: Int
    abs: Int
    class: Int
    weight_lbs: Int
    weight_kg: Int
    year_built: Int
    home_port: String
    status: String
    speed_kn: Int
    course_deg: Int
    latitude: Float
    longitude: Float
    successful_landings: Int
    attempted_landings: Int
    mission: String
  }
`;
export default typeDefs;
