  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'https://proseware.skwantoso.com/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
 	clientID: '9bdade37-a70b-4eee-ae7a-b38e2c8a1416',
 	clientSecret: '8s<Xb3</AVX)(I**',
	tenantName: 'prosewareb2c.onmicrosoft.com',
 	skipUserProfile: true, // for OpenID only flows this should be set to true
 	responseType: 'id_token', // for login only flows
 	responseMode: 'form_post', // As per the OAuth 2.0 standard.

 };
