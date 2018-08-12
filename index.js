const authenticateAndUpload = require('./components');

authenticateAndUpload();


// const {google} = require('googleapis');
// const fs = require('fs');
// //const key = require('./serviceKey.json');
//
// const drive = google.drive('v3');
// // Target forlder for the Uploaded file. This must be shared with the service account.
// //const folderId = "13EiYGFE6IeUkUGbFVc08KOqeijjbLHqr";
//
//
// const jwtClient = new google.auth.JWT(
//   key.client_email,
//   null,
//   key.private_key,
//   ['https://www.googleapis.com/auth/drive'],
//   null
// );
//
// jwtClient.authorize((authErr) => {
//   if (authErr) {
//     console.log(authErr);
//     return;
//   }
//
//   // Make an authorized requests
//
//   // List Drive files.
//   drive.files.list({ auth: jwtClient }, (listErr, resp) => {
//     if (listErr) {
//       console.log(listErr);
//       return;
//     }
//     resp.files.forEach((file) => {
//       console.log(`${file.name} (${file.mimeType})`);
//     });
//   });
// });



// const fs = require('fs');
// const path = require('path');
// // update this to point to your service account key
// const key = require('./serviceKey.json');
//
// // Target forlder for the Uploaded file. This must be shared with the service account.
// const targetFolderId = '13EiYGFE6IeUkUGbFVc08KOqeijjbLHqr';
//this is our drie folder
//
// // location of the file to be uploaded
// const file = './photo.jpg';
//
// module.exports = {
//   key,
//   file: {
//     metadata: {
//       name: 'photo.jpg',
//       parents: [targetFolderId]
//     },
//     media: {
//       mimeType: 'image/jpeg',
//       body: fs.createReadStream(path.join(__dirname, file))
//     }
//   }
// };
//
