const storage = require('@google-cloud/storage')();

const Buffer = require('safe-buffer').Buffer;

exports.template = function template (event) {
  let file = event.data;

  return Promise.resolve()
    .then(() => {
      if (file.resourceState === 'not_exists') {
        return;
      }

      if (!file.bucket) {
        throw new Error('ERROR: need "bucket"');
      }
      if (!file.name) {
        throw new Error('ERROR: need "name"');
      }

      // do stuff
      
    })
    .then(() => {
      console.log(`File ${file.name} processed.`);
    });
};
