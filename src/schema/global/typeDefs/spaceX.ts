import gql from 'graphql-tag';

const spaceX = gql`
  type Force {
    kN: Float
    lbf: Float
  }

  type Mass {
    kg: Int
    lb: Int
  }

  type Volume {
    cubic_meters: Int
    cubic_feet: Int
  }

  type Distance {
    meters: Float
    feet: Float
  }

  type Link {
    reddit: String
    article: String
    wikipedia: String
  }

  type Address {
    address: String
    city: String
    state: String
  }

  type Location {
    name: String
    region: String
    latitude: Float
    longitude: Float
  }
`;

export default spaceX;
