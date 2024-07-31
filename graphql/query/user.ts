export const verifyUserGoogleTokenQUery=`#graphql
    query Query($token: String!) {
  verifyGoogleToken(token: $token)
}
`