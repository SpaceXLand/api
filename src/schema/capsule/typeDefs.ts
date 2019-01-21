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
