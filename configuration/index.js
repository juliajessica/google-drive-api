const fs = require('fs');
const path = require('path');

// update this to point to your service account key
const key = require('../serviceKey.json');

// Target forlder for the Uploaded file. This must be shared with the service account.
const folderId = "1rpl3pq3P7Nub_wVivNEJFFUSSHsBObUu";

// location of the file to be uploaded
const file = '../helloWorld.txt';

module.exports = {
  key,
  file: {
    metadata: {
      name: 'helloWorld.txt',
      parents: [folderId]
    },
    media: {
      mimeType: 'text/plain',
      body: fs.createReadStream(path.join(__dirname, file))
    }
  }
};
