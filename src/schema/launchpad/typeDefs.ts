import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    launchpads(limit: Int, offset: Int): [Launchpad]
    launchpad(pad: String!): Launchpad
  }

  type Launchpad {
    id: Int
    status: String
    location: Location
    vehicles_launched: [Rocket]
    attempted_launches: Int
    successful_launches: Int
    wikipedia: String
    details: String
    site_id: String
    site_name_long: String
  }
`;
export default typeDefs;
