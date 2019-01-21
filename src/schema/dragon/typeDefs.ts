import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    dragons(limit: Int, offset: Int): [Dragon]
    dragon(id: ID!): Dragon
  }

  extend type Capsule {
    dragon: Dragon
  }

  type Dragon {
    id: ID
    name: String
    type: String
    active: Boolean
    crew_capacity: Int
    sidewall_angle_deg: Float
    orbit_duration_yr: Int
    dry_mass_kg: Int
    dry_mass_lb: Int
    first_flight: String
    heat_shield: DragonHeatShield
    thrusters: [DragonThrust]
    launch_payload_mass: Mass
    launch_payload_vol: Volume
    return_payload_mass: Mass
    return_payload_vol: Volume
    pressurized_capsule: DragonPressurizedCapsule
    trunk: DragonTrunk
    height_w_trunk: Distance
    diameter: Distance
    wikipedia: String
    description: String
  }

  type DragonHeatShield {
    material: String
    size_meters: Float
    temp_degrees: Int
    dev_partner: String
  }

  type DragonThrust {
    type: String
    amount: Int
    pods: Int
    fuel_1: String
    fuel_2: String
    thrust: Force
  }

  type DragonPressurizedCapsule {
    payload_volume: Volume
  }

  type DragonTrunk {
    trunk_volume: Volume
    cargo: DragonTrunkCargo
  }

  type DragonTrunkCargo {
    solar_array: Int
    unpressurized_cargo: Boolean
  }
`;
export default typeDefs;
