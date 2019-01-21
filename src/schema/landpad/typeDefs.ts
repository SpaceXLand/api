import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    landpads(limit: Int, offset: Int): [Landpad]
    landpad(id: ID!): Landpad
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
