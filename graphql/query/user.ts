import {graphql} from "../../gql";


export const verifyUserGoogleTokenQUery=graphql(`#graphql
    query Query($token: String!) {
  verifyGoogleToken(token: $token)
}
`);

export const getCurrentUserQuery=graphql(`#graphql
    
  query GetCurrentUser {
  getCurrentUser {
    id
    firstName
    lastName
    email
    profileImageURL
  }
}
`)