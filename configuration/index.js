// const fs = require('fs');
// const path = require('path');
// // update this to point to your service account key
// const key = require('../serviceKey.json');
// // Target folder for the Uploaded file. This must be shared with the service account.
// const folderId = "1KYOaHA2PFyrE8GaTWDGMt87ndPFzRwWS";
// // location of the file to be uploaded
// const file = '../testPhoto.jpeg';
// // const fileID =
//
// module.exports = {
//   key,
//   file: {
//     metadata: {
//       name: 'photo.jpeg',
//       parents: [folderId],
//     },
//     media: {
//       mimeType: 'image/jpeg',
//       body: fs.createReadStream(path.join(__dirname, file))
//     }
//   }
// };
