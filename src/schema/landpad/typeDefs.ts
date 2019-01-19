import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    landpads(limit: Int, offset: Int): [Landpad]
    landpad(landpad_id: String!): Landpad
  }

  type Landpad {
    id: String
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
