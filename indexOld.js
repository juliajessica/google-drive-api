const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
var path = require('path');
const drive = google.drive('v3');
var SCOPES = 'https://www.googleapis.com/auth/drive';
const TOKEN_PATH = 'token.json';
const key = 'serviceKey.json';

var folderId = "13EiYGFE6IeUkUGbFVc08KOqeijjbLHqr";

var jwToken = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key, ["https://www.googleapis.com/auth/drive"],
  null
);
jwToken.authorize((authErr) => {
  if (authErr) {
    console.log("error : " + authErr);
    return;
  } else {
    console.log("Authorization accorded");
  }
});
console.log(jwToken);


// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content));
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */

 function authorize(credentials, callback) {
   const {client_secret, client_id, redirect_uris} = credentials.installed; //object Destructuring
   const oAuth2Client = new google.auth.OAuth2(
       client_id, client_secret, redirect_uris[0]);

   // Check if we have previously stored a token.
   fs.readFile(TOKEN_PATH, (err, token) => {
     if (err) return getAccessToken(oAuth2Client, callback);
     oAuth2Client.setCredentials(JSON.parse(token));
     callback(oAuth2Client);
   });
 }

 /**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
 function getAccessToken(oAuth2Client, callback) {
   const authUrl = oAuth2Client.generateAuthUrl({
     access_type: 'offline',
     scope: SCOPES,
   }); //generate url to authenticate the user
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({ //reading one line at a time
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

// var fileMetadata = {
//   'name': 'photo.jpg',
//   'parents': [folderId]
// };
// //console.log(fileMetadata);
//
// var fileCreated = {
//   mimeType: 'image/jpeg',
//   //body: fs.createReadStream(path.join(__dirname, './photo.jpg'))
//   body: fs.createReadStream(path.join(__dirname, 'photo.jpg'))
// };
// //console.log(fileCreated);
// function createFiles(auth) {
//   const driveAuth = google.drive({version: 'v3', auth});
//   driveAuth.files.create({
//     //auth: API_KEY,
//     // resource: fileMetadata,
//     fileCreated: fileCreated,
//     fields: 'id'
//   }, function(err, file) {
//     if (err) {
//       // Handle error
//       console.error(err);
//     } else {
//       console.log('File Id: ', file.id);
//     }
//   });
// }







// //
// // /**
// //  * Insert new file.
// //  *
// //  * @param {File} fileData File object to read data from.
// //  * @param {Function} callback Function to call when the request is complete.
// //  */
// function insertFile(fileData, callback) {
//   const boundary = '-------314159265358979323846';
//   const delimiter = "\r\n--" + boundary + "\r\n";
//   const close_delim = "\r\n--" + boundary + "--";
//
//   var reader = new FileReader();
//   reader.readAsBinaryString(fileData);
//   reader.onload = function(e) {
//     var contentType = fileData.type || 'application/octet-stream';
//     var metadata = {
//       'title': fileData.fileName,
//       'mimeType': contentType
//     };
//
//     var base64Data = btoa(reader.result);
//     var multipartRequestBody =
//         delimiter +
//         'Content-Type: application/json\r\n\r\n' +
//         JSON.stringify(metadata) +
//         delimiter +
//         'Content-Type: ' + contentType + '\r\n' +
//         'Content-Transfer-Encoding: base64\r\n' +
//         '\r\n' +
//         base64Data +
//         close_delim;
//
//     var request = gapi.client.request({
//         'path': '/upload/drive/v3/files',
//         'method': 'POST',
//         'params': {'uploadType': 'multipart'},
//         'headers': {
//           'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
//         },
//         'body': multipartRequestBody});
//     if (!callback) {
//       callback = function(file) {
//         console.log(file)
//       };
//     }
//     request.execute(callback);
//   }
// }
