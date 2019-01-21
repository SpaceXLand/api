import gql from 'graphql-tag';

const directives = gql`
  directive @rateLimit(
    max: Int
    window: String
    message: String
    identityArgs: [String]
  ) on FIELD_DEFINITION
`;
export default directives;
