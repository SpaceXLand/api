import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    capsules(
      find: CapsulesFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule]
    capsulesPast(
      find: CapsulesFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule]
    capsulesUpcoming(
      find: CapsulesFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule]
    capsule(id: ID!): Capsule
  }

  type Capsule {
    id: ID
    status: String
    original_launch: Date
    missions: [CapsuleMission]
    landings: Int
    type: String
    reuse_count: Int
  }

  input CapsulesFind {
    capsule_serial: String
    capsule_id: String
    status: String
    original_launch: Date
    mission: String
    landings: Int
    type: String
    reuse_count: Int
  }

  type CapsuleMission {
    name: String
    flight: Int
  }
`;

export default typeDefs;
