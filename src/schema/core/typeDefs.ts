import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    cores(
      find: CoresFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Core]
    coresPast(
      find: CoresFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Core]
    coresUpcoming(
      find: CoresFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Core]
    core(id: ID!): Core
  }

  type Core {
    asds_attempts: Int
    asds_landings: Int
    block: Int
    id: ID
    missions: [CapsuleMission]
    original_launch: Date
    reuse_count: Int
    rtls_attempts: Int
    rtls_landings: Int
    status: String
    water_landing: Boolean
  }

  input CoresFind {
    asds_attempts: Int
    asds_landings: Int
    block: Int
    id: String
    missions: String
    original_launch: Date
    reuse_count: Int
    rtls_attempts: Int
    rtls_landings: Int
    status: String
    water_landing: Boolean
  }

  type CoreMission {
    name: String
    flight: Int
  }
`;
export default typeDefs;
