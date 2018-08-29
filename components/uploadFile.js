const {google} = require('googleapis');
//const {file} = require('../configuration/index.js');
const drive = google.drive('v3');
const fs = require('fs');
const path = require('path');
const key = require('../serviceKey.json');
const folderId = "1n7Z3Mfuv3-b82WrDHIDpga1FKsjFL_UB";
const file = '../testPhoto.jpeg';
//const jwtClient = require('./auth.js');
const authorizeJWT = require('./auth.js');
const uuidv4 = require('uuid/v4');
const fileId = uuidv4();
//const id = newUUID.toString();
//console.log('jwtClient', jwtClient);

const fileDeets = {
  file: {
    metadata: {
      name: 'photo.jpeg',
      parents: [folderId],
      id: fileId,
      //trashed: false
    },
    media: {
      mimeType: 'image/jpeg',
      body: fs.createReadStream(path.join(__dirname, file))
    }
  }
};

//console.log('fileDeets', fileDeets);

// function listFiles(jwtClient) {
//   return new Promise((resolve, reject) => {
//     drive.files.list({
//       auth: jwtClient,
//       resource: fileDeets.file.metadata,
//       media: fileDeets.file.media,
//       fields: 'id'
//     }, (err, uploadedFile) => {
//       if (err) reject(err);
//       console.log('AUTH', jwtClient);
//       // Promise is resolved with the result of create call
//       resolve(uploadedFile);
//     });
//   });
// }

async function authenticateAndUpload() {
  const auth = await authorizeJWT();
  //console.log('async auth', auth);
  authorizeJWT().then(auth => {
    //console.log('AUTH', auth);
     return drive.files.list({
      auth,
      name: file,
    })
  })
  .then(result => {
    const { files } = result.data;
      //console.log('files', files);
    authorizeJWT()
    for (let i= 0; i < files.length; i++) {
      console.log('deleted file', files[i]);
      console.log('deleted file ID', files[0].id);
      //console.log('LIST OF FILES', files);
        return drive.files.delete({
          auth,
          fileId: files[0].id,
          trashed: true
        })
      console.log('trash', files);
    }
  })

  // .then(result => {
  //   const { files } = result.data;
  //   console.log('hi', files);
  //   authorizeJWT()
  //   .then(auth => {
  //     console.log('hi', files.name);
  //     return drive.files.create({
  //       auth,
  //       name: files,
  //       //trashed: false
  //     })
  //   })
  // })

  .catch(err => console.log(err));
}

module.exports = authenticateAndUpload;


//
// let authAndCreatePromise = authorizeJWT().then(auth => {
//     //console.log('BEGGGGGINNING', auth, 'ENNNNNND');
//     return drive.files.list({
//       auth,
//       name: file.name
//     })
//   })
//   function authenticateAndUpload() {
//   authorizeJWT()
//   .then(auth => {
//     console.log('FILE AUTH', auth);
//      return drive.files.list({
//       auth,
//       name: fileName
//     })
//   })
//   //console.log(authAndCreatePromise);
// // function uploadFile(auth) {
//
//   .then(auth => {
//     authorizeJWT()
//      const { files } = result.data;
//     console.log('HIIIII', auth);
//     console.log('FILES', files);
//     //return new Promise((resolve, reject) => {
//       drive.files.create({
//         auth,
//         resource: fileDeets.file.metadata,
//         media: fileDeets.file.media,
//         //fields: 'id'
//       })
//     })
//   // })
//   .catch(err => console.log(err));
// }
//
// module.exports = authenticateAndUpload;
// module.exports = authorizeJWT;
