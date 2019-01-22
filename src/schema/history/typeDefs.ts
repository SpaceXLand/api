import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    histories(
      find: HistoryFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [History] @rateLimit(window: "10s", max: 10)
    history(id: ID!): History @rateLimit(window: "10s", max: 10)
  }

  type History {
    details: String
    event_date_unix: Date
    event_date_utc: Date
    id: ID
    links: Link
    title: String
  }

  input HistoryFind {
    end: Date
    flight_number: Int
    id: ID
    start: Date
  }
`;
export default typeDefs;
