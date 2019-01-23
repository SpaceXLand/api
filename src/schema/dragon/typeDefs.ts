import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    dragons(limit: Int, offset: Int): [Dragon]
      @rateLimit(window: "10s", max: 10)
    dragon(id: ID!): Dragon @rateLimit(window: "10s", max: 10)
  }

  extend type Capsule {
    dragon: Dragon
  }

  type Dragon {
    active: Boolean
    crew_capacity: Int
    description: String
    diameter: Distance
    dry_mass_kg: Int
    dry_mass_lb: Int
    first_flight: String
    heat_shield: DragonHeatShield
    height_w_trunk: Distance
    id: ID
    launch_payload_mass: Mass
    launch_payload_vol: Volume
    name: String
    orbit_duration_yr: Int
    pressurized_capsule: DragonPressurizedCapsule
    return_payload_mass: Mass
    return_payload_vol: Volume
    sidewall_angle_deg: Float
    thrusters: [DragonThrust]
    trunk: DragonTrunk
    type: String
    wikipedia: String
  }

  type DragonHeatShield {
    dev_partner: String
    material: String
    size_meters: Float
    temp_degrees: Int
  }

  type DragonThrust {
    amount: Int
    fuel_1: String
    fuel_2: String
    pods: Int
    thrust: Force
    type: String
  }

  type DragonPressurizedCapsule {
    payload_volume: Volume
  }

  type DragonTrunk {
    cargo: DragonTrunkCargo
    trunk_volume: Volume
  }

  type DragonTrunkCargo {
    solar_array: Int
    unpressurized_cargo: Boolean
  }
`;
export default typeDefs;
