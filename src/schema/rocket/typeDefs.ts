import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    rockets(limit: Int, offset: Int): [Rocket]
    rocket(id: ID!): Rocket
  }

  type Rocket {
    active: Boolean
    boosters: Int
    company: String
    cost_per_launch: Int
    country: String
    description: String
    diameter: Distance
    engines: RocketEngines
    first_flight: Date
    first_stage: RocketFirstStage
    height: Distance
    id: ID
    landing_legs: RocketLandingLegs
    mass: Mass
    name: String
    payload_weights: [RocketPayloadWeight]
    second_stage: RocketSecondStage
    stages: Int
    success_rate_pct: Int
    type: String
    wikipedia: String
  }

  type RocketPayloadWeight {
    id: String
    kg: Int
    lb: Int
    name: String
  }

  type RocketFirstStage {
    burn_time_sec: Int
    engines: Int
    fuel_amount_tons: Float
    reusable: Boolean
    thrust_sea_level: Force
    thrust_vacuum: Force
  }

  type RocketSecondStage {
    burn_time_sec: Int
    engines: Int
    fuel_amount_tons: Float
    payloads: RocketSecondStagePayloads
    thrust: Force
  }

  type RocketSecondStagePayloads {
    option_1: String
    composite_fairing: RocketSecondStagePayloadCompositeFairing
  }

  type RocketSecondStagePayloadCompositeFairing {
    height: Distance
    diameter: Distance
  }

  type RocketEngines {
    number: Int
    type: String
    version: String
    layout: String
    engine_loss_max: String
    propellant_1: String
    propellant_2: String
    thrust_sea_level: Force
    thrust_vacuum: Force
    thrust_to_weight: Float
  }

  type RocketLandingLegs {
    number: Int
    material: String
  }
`;

export default typeDefs;
