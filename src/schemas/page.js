import gql from "graphql-tag";

export const GET_PAGE = gql`
  query getPage($path: String!) {
    page: getPage(params: { path: $path }) {
      fields {
        title
        body
      }
    }
  }
`;
