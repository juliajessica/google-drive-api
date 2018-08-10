const {google} = require('googleapis');
const fs = require('fs');
const key = require('./serviceKey.json');

const drive = google.drive('v3');
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/drive'],
  null
);

jwtClient.authorize((authErr) => {
  if (authErr) {
    console.log(authErr);
    return;
  }


  const fileMetadata = {
    name: 'helloWorld.txt'
  };

  const media = {
    mimeType: 'text/plain',
    body: fs.createReadStream('./helloWorld.txt')
  };

  drive.files.create({
    auth: jwtClient,
    resource: fileMetadata,
    media,
    fields: 'id'
  }, (err, file) => {
    if (err) {
      console.log(err);
      return;
    }
    // Log the id of the new file on Drive
    console.log('Uploaded File Id: ', file.id);
  });
});



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
