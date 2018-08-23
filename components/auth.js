/* This module reads the key file and setups the authorization for the service account. */
const {google} = require('googleapis');
const key = require('../serviceKey.json');

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/drive'],
  null
);

console.log({email: key.client_email, key: key.private_key})

/**
 * Authorize the service account to access shared drive folders
 * @return {Promise} Resolved with authorized jwtClient object
 */
function authorizeJWT() {
  return new Promise((resolve, reject) => {
    jwtClient.authorize(function (err, tokens) {  // eslint-disable-line
      if (err) {
        reject(err);
      }
      resolve(jwtClient);
    });
  });
}

module.exports = authorizeJWT;
