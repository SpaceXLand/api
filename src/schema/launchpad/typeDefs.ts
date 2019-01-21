import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    launchpads(limit: Int, offset: Int): [Launchpad]
    launchpad(id: ID!): Launchpad
  }

  type Launchpad {
    attempted_launches: Int
    details: String
    id: ID
    location: Location
    name: String
    status: String
    successful_launches: Int
    vehicles_launched: [Rocket]
    wikipedia: String
  }
`;
export default typeDefs;
