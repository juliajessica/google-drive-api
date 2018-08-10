const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
var SCOPES = 'https://www.googleapis.com/auth/drive';
//Full, permissive scope to access all files, excluding the Application Data folder.
fs.readFile('client_secret.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), listFiles);
});


var fileMetadata = {
  'name': 'test drive api',
  'mimeType': 'application/vnd.google-apps.file'
};
console.log(fileMetadata);
var file = {
  mimeType: 'text/csv',
  body: fs.createReadStream('files/')
};
const drive = google.drive({version: 'v3'});
drive.files.create({
  resource: fileMetadata,
  file: file,
  fields: 'id'
}, function (err, file) {
  if (err) {
    // Handle error
    return cosole.log('The API returned an error: ' + err);
  } else {
    console.log('File Id: ', file.id);
  }
});







      /**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
// * @param {function} callback The callback to call with the authorized client.
 */
//
// function authorize(credentials, callback) {
//   const {client_secret, client_id, redirect_uris} = credentials.installed;
//   const oAuth2Client = new google.auth.OAuth2(
//     client_id, client_secret, redirect_uris[0]);
//
//     // Check if we have previously stored a token.
//     fs.readFile(TOKEN_PATH, (err, token) => {
//       if (err) return getAccessToken(oAuth2Client, callback);
//       oAuth2Client.setCredentials(JSON.parse(token));
//       callback(oAuth2Client);
//     });
//   }
