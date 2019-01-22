import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    missions(find: MissionsFind, limit: Int, offset: Int): [Mission]
      @rateLimit(window: "10s", max: 10)
    mission(id: ID!): Mission @rateLimit(window: "10s", max: 10)
  }

  type Mission {
    description: String
    id: ID
    manufacturers: [String]
    name: String
    twitter: String
    website: String
    wikipedia: String
  }

  input MissionsFind {
    id: ID
    manufacturer: String
    name: String
    payload_id: String
  }
`;
export default typeDefs;
