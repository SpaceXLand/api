import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    missions(find: MissionsFind, limit: Int, offset: Int): [Mission]
    mission(id: ID!): Mission
  }

  type Mission {
    id: ID
    name: String
    manufacturers: [String]
    wikipedia: String
    website: String
    twitter: String
    description: String
  }

  input MissionsFind {
    id: ID
    name: String
    manufacturer: String
    payload_id: String
  }
`;
export default typeDefs;
