import gql from "graphql-tag";

export const GET_DELIVERIES = gql`
  query getDeliveries {
    getDeliveries {
      deliveries {
        date
        postCode
      }
    }
  }
`;

export default {};
