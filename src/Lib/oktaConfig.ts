export const oktaConfig = {
    clientId: '0oa8gawls3LJ3Dg9y5d7',
    issuer: 'https://dev-62669696.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}