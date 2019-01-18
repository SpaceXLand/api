import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    company(id: Boolean): Info
  }
  type Info {
    _id: ObjectID
    name: String
    founder: String
    founded: Int
    employees: Int
    vehicles: Int
    launch_sites: Int
    test_sites: Int
    ceo: String
    cto: String
    coo: String
    cto_propulsion: String
    valuation: Float
    headquarters: Address
    links: InfoLinks
    summary: String
  }

  type InfoLinks {
    website: String
    flickr: String
    twitter: String
    elon_twitter: String
  }
`;
export default typeDefs;
