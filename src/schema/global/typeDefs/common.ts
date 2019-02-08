import gql from 'graphql-tag';

const common = gql`
  type Result {
    totalCount: Int
    count: Int
  }

  type Address {
    address: String
    city: String
    state: String
  }

  type Distance {
    feet: Float
    meters: Float
  }

  type Force {
    kN: Float
    lbf: Float
  }

  type Link {
    article: String
    reddit: String
    wikipedia: String
  }

  type Location {
    latitude: Float
    longitude: Float
    name: String
    region: String
  }

  type Mass {
    kg: Int
    lb: Int
  }

  type Volume {
    cubic_feet: Int
    cubic_meters: Int
  }
`;

export default common;
