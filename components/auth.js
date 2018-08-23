/* This module reads the key file and setups the authorization for the service account. */
const {google} = require('googleapis');
const config = require('../configuration/index.js');

const jwtClient = new google.auth.JWT(
  config.key.client_email,
  null,
  config.key.private_key,
  ['https://www.googleapis.com/auth/drive'],
  null
);

console.log({email: config.key.client_email, key: config.key.private_key})

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
