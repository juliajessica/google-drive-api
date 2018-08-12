const authorize = require('./auth');
const uploadFile = require('./uploadFile');

function authenticateAndUpload() {
  authorize()
  .then(uploadFile)
  .then((file) => {
    console.log('Uploaded File Id: ', file.id);
  })
  .catch(err => console.log(err));
}

//// function execute() {
//   return gapi.client.drive.files.generateIds({})
//     .then(function(response) {
//       // Handle the results here (response.result has the parsed body).
//       console.log("Response", response);
//     },
//       function(err) {
//         console.error("Execute error", err); 
//       });

module.exports = authenticateAndUpload;
