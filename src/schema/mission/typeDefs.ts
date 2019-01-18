import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    missions(find: MissionsFind, limit: Int, offset: Int): [Mission]
    mission(mission_id: String!): Mission
  }

  type Mission {
    mission_name: String
    mission_id: String
    manufacturers: [String]
    wikipedia: String
    website: String
    twitter: String
    description: String
  }

  input MissionsFind {
    mission_name: String
    mission_id: String
    manufacturer: String
    payload_id: String
  }
`;
export default typeDefs;
