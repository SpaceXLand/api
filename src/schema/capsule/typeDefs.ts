import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    capsules(
      find: CapsulesFind
      id: Boolean
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule]
    capsulesPast(
      find: CapsulesFind
      id: Boolean
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule]
    capsulesUpcoming(
      find: CapsulesFind
      id: Boolean
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Capsule]
    capsule(capsule_serial: String!, id: Boolean): Capsule
  }

  type Capsule {
    _id: ObjectID
    capsule_serial: String
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
