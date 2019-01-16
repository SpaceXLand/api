import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    landpads(id: Boolean, limit: Int, offset: Int): [Landpad]
    landpad(landpad_id: String!, id: Boolean): Landpad
  }

  type Landpad {
    _id: ObjectID
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
