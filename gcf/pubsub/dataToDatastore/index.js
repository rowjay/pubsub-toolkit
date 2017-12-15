'use strict';

const Buffer = require('safe-buffer').Buffer;

exports.onPubsubMessage = function (event, callback) {

  // For a Pubsub message:
  // The payload is a message object in event.data
  const pubsubMessage = event.data;
  
  // In base64 encoding
  const data = Buffer.from(pubsubMessage.data, 'base64').toString()

  // Debugging logs
  console.log(`
    data: ${data},
    attributes: ${attributes},
    messageId: ${messageId},
    publishTime: ${publishTime}
    `);

  // TODO: add data to datastore

  callback();
};
