import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    launchpads(limit: Int, offset: Int): [Launchpad]
    launchpad(id: ID!): Launchpad
  }

  type Launchpad {
    id: ID
    name: String
    status: String
    location: Location
    vehicles_launched: [Rocket]
    attempted_launches: Int
    successful_launches: Int
    wikipedia: String
    details: String
  }
`;
export default typeDefs;
