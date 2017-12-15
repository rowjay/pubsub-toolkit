'use strict';
var datastore = require('@google-cloud/datastore')();
const datastore = Datastore();
const Buffer = require('safe-buffer').Buffer;

exports.storeData = function storeData (event, callback) {

  // For a Pubsub message:
  // The payload is a message object in event.data
  const pubsubMessage = event.data;
  
  // In base64 encoding
  const data = JSON.parse(Buffer.from(pubsubMessage.data, 'base64').toString())

  // Debugging logs
  console.log(`
    data: ${data},
    `);
  
  const messageId = event.data.messageId;
  
  // Datastore
  var key = datastore.key(['datraFromPubsub', 'messageId']);

  var entity = {
    key: key,
    data: data
  };
  
  datastore.save(entity, function(err) {
    if (!err) {
    console.log('Message saved');
    }
  });
  
  callback();
};
