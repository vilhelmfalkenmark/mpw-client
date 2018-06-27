import gql from "graphql-tag";

export const GET_USER_INFO = gql`
  query getUser {
    currentUser: getUser {
      name
      postcode
      userId
    }
  }
`;
