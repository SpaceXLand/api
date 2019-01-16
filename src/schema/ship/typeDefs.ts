import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    ships(
      find: ShipsFind
      id: Boolean
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Ship]
    ship(ship_id: String!, id: Boolean): Ship
  }

  type Ship {
    _id: ObjectID
    ship_id: String
    ship_name: String
    ship_model: String
    ship_type: String
    roles: [String]
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
    speed_kn: Float
    course_deg: Int
    position: ShipLocation
    successful_landings: Int
    attempted_landings: Int
    missions: [ShipMission]
    url: String
    image: String
  }

  type ShipLocation {
    latitude: Float
    longitude: Float
  }

  type ShipMission {
    name: String
    flight: String
  }

  input ShipsFind {
    ship_id: String
    ship_name: String
    ship_model: String
    ship_type: String
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
