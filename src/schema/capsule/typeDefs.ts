import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    capsules(
      find: CapsulesFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule] @rateLimit(window: "10s", max: 10)
    capsulesPast(
      find: CapsulesFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule] @rateLimit(window: "10s", max: 10)
    capsulesUpcoming(
      find: CapsulesFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule] @rateLimit(window: "10s", max: 10)
    capsule(id: ID!): Capsule @rateLimit(window: "10s", max: 10)
  }

  type Capsule {
    id: ID
    landings: Int
    missions: [CapsuleMission]
    original_launch: Date
    reuse_count: Int
    status: String
    type: String
  }

  input CapsulesFind {
    id: ID
    landings: Int
    mission: String
    original_launch: Date
    reuse_count: Int
    status: String
    type: String
  }

  type CapsuleMission {
    flight: Int
    name: String
  }
`;

export default typeDefs;
