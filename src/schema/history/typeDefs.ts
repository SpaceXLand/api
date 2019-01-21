import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    histories(
      find: HistoryFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [History]
    history(id: ID!): History
  }

  type History {
    id: ID
    title: String
    event_date_utc: Date
    event_date_unix: Date
    details: String
    links: Link
  }

  input HistoryFind {
    id: ID
    start: Date
    end: Date
    flight_number: Int
  }
`;
export default typeDefs;
