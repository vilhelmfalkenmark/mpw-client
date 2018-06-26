import gql from "graphql-tag";

export const POST_AUTHENTICATION = gql`
  mutation postAuthentication {
    postAuthentication {
      authenticated
    }
  }
`;

export default {};
