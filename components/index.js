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

module.exports = authenticateAndUpload;
