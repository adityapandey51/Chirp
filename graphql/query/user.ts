import {graphql} from "../../gql";


export const verifyUserGoogleTokenQUery=graphql(`#graphql
    query Query($token: String!) {
  verifyGoogleToken(token: $token)
}
`);