import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    launchpads(limit: Int, offset: Int): [Launchpad]
      @rateLimit(window: "10s", max: 10)
    launchpad(id: ID!): Launchpad @rateLimit(window: "10s", max: 10)
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
