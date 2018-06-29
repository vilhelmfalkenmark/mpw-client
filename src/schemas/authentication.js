import gql from "graphql-tag";

export const POST_PHONE_AUTHENTICATION = gql`
  mutation postPhoneAuthentication($phoneNumber: Float!, $pinCode: Int!) {
    postPhoneAuthentication: postPhoneAuthentication(
      params: { phoneNumber: $phoneNumber, pinCode: $pinCode }
    ) {
      token
    }
  }
`;

export const POST_EMAIL_AUTHENTICATION = gql`
  mutation postEmailAuthentication($email: String!, $pinCode: Int!) {
    postEmailAuthentication: postEmailAuthentication(
      params: { email: $email, pinCode: $pinCode }
    ) {
      token
    }
  }
`;

export default {};
