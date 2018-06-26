import gql from "graphql-tag";

export const GET_USER_INFO = gql`
  query getUser($token: String!) {
    currentUser: getUser(params: { token: $token }) {
      name
      postcode
    }
  }
`;
