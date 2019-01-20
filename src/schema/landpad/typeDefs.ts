import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    landpads(limit: Int, offset: Int): [Landpad]
    landpad(id: ID!): Landpad
  }

  type Landpad {
    id: ID
    full_name: String
    status: String
    location: Location
    landing_type: String
    attempted_landings: String
    successful_landings: String
    wikipedia: String
    details: String
  }
`;

export default typeDefs;
