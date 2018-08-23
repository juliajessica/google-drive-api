// const authenticateAndUpload = require('./components');
//
// authenticateAndUpload();


const authorize = require('./components/auth.js');
const uploadFile = require('./components/uploadFile.js');

function authenticateAndUpload() {
  authorize()
  .then(uploadFile)
  .then((file) => {
    console.log('Uploaded File Id: ', file.id);
  })
  .catch(err => console.log(err));
}

authenticateAndUpload();
