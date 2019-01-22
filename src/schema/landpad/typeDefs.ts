import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    landpads(limit: Int, offset: Int): [Landpad]
      @rateLimit(window: "10s", max: 10)
    landpad(id: ID!): Landpad @rateLimit(window: "10s", max: 10)
  }

  type Landpad {
    attempted_landings: String
    details: String
    full_name: String
    id: ID
    landing_type: String
    location: Location
    status: String
    successful_landings: String
    wikipedia: String
  }
`;

export default typeDefs;
