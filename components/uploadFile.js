const {google} = require('googleapis');
const {file} = require('../configuration/index.js');
const drive = google.drive('v3');

function uploadFile(jwtClient) {
  return new Promise((resolve, reject) => {
    drive.files.create({
      auth: jwtClient,
      resource: file.metadata,
      media: file.media,
      fields: 'id'
    }, (err, uploadedFile) => {
      if (err) reject(err);
      // Promise is resolved with the result of create call
      resolve(uploadedFile);
    });
  });
}

module.exports = uploadFile;






//   function deleteFile(jwtClient) {
//     return new Promise((resolve, reject) => {
//     drive.files.delete({
//       fileId: file.data.id,
//       auth: jwtClient,
//     }, (err, deleteThisFile) => {
//       if (err) reject(err);
//     //request.execute(function(resp) { });
//     resolve(deleteThisFile);
//     console.log(deleteThisFile);
//     });
//   });
// }

// let newArrayofObjects = uploadedFile.map(()=> {
//     //let id = file.data.id;
//     if (file.data.id !===)
//     return
// });

// newArrayofObjects();




//   function downloadFile(file, callback) {
//     if (file.downloadUrl) {
//       var accessToken = gapi.auth.getToken().access_token;
//       var xhr = new XMLHttpRequest();
//       xhr.open('GET', file.downloadUrl);
//       xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
//       xhr.onload = function() {
//         callback(xhr.responseText);
//       };
//       xhr.onerror = function() {
//         callback(null);
//       };
//       xhr.send();
//     } else {
//       callback(null);
//     }
//   }


// function httpGetAsync(id){
//   var promise = new Promise(function(resolve, reject){
//     let ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://www.googleapis.com/drive/v2/files/generateIds');
//     ourRequest.send();
//     ourRequest.onload = function(){
//        if (this.status === 200){
//          resolve(ourRequest.response);
//        } else {
//          reject(Error(ourRequest.statusText));
//        }
//      }
//    });
//    return promise;
// }
// httpGetAsync(id);


/////////

//     drive.files.list({
//        auth: jwtClient,
//        resource: file.metadata,
//        media: file.media,
//     }, (listErr) => {
//         if (listErr) reject(listErr);
//           console.log(listErr);
//         }
//         drive.files.forEach((file) => {
//             resolve(listedFiles);
//             console.log(`${file.name} (${file.mimeType})`);
//         });
//     });
//   });
// }

// function deleteFile(fileId) {
//   let request = gapi.client.drive.files.delete({
//     'fileId': fileId
//  });
//    request.execute(function(resp) { });
// }

  //////////////

//const folderID = '';
//const fileID = '';
// function uploadFile(jwtClient, folderID, fileID) {
//     return new Promise((resolve, reject) => {
//     if (the file id's dont match) {
//         drive.files.delete({})
//     }


//     else {

//     }


//       drive.files.create({
//         auth: jwtClient,
//         folderID: folderID,
//         fileId: fileID,
//         resource: file.metadata,
//         media: file.media,
//         fields: 'id'
//       }, (err, uploadedFile) => {
//         if (err) reject(err);
//         // Promise is resolved with the result of create call
//         resolve(uploadedFile);
//       });
//     });
//   }

//// function execute() {
//   return gapi.client.drive.files.generateIds({})
//     .then(function(response) {
//       // Handle the results here (response.result has the parsed body).
//       console.log("Response", response);
//     },
//       function(err) {
//         console.error("Execute error", err);
//       });





///old v-2

//const APIKEY = 'AIzaSyB31aTm5t7GstxKyrAKvLoXNcP2runzAQw';

//gettingFileId(jwtClient){
  //let promise = new Promise(function(resolve, reject) {

//   let xmlReq = new XMLHttpRequest();
//    console.log('UNSENT', xmlReq.status);
//     xmlReq.open('DELETE', 'https://www.googleapis.com/auth/drive/v3/files/' + fileId + '?key=' + APIKEY);
//     console.log('OPENED', xmlReq.status);
//     console.log("id", fileId);
//     console.log('file', xmlReq);
//     xmlReq.setRequestHeader('Authorization', 'Bearer ' + jwtClient);
//     xmlReq.send();
//     xmlReq.onload = function(){
//       if (this.status === 200) {
//          resolve(xmlReq.response);
//       }  else {
//           reject(Error(xmlReq.statusText));
//       }
//     }
