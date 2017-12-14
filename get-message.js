'use strict';

// Google's PubSub client library module
const PubSub = require(`@google-cloud/pubsub`);
// Create PubSub client object
const client = PubSub();

const Buffer = require('safe-buffer').Buffer;

exports.getMessage = function (event, callback) {
  // The payload is a message object in event.data
  const pubsubMessage = event.data;

  const data = Buffer.from(pubsubMessage.data, 'base64').toString()


  const attributes = pubsubMessage.attributes;
  // object. {'key0':'value0', 'key1':'value1' }

  const messageId = pubsubMessage.messageId;
  // string. A project-unique message ID

  const publishTime = pubsubMessage.publishTime;
  // string. Message publish time in UCT format

  // Debugging logs
  console.log(`
    data: ${data},
    attributes: ${attributes},
    messageId: ${messageId},
    publishTime: ${publishTime}
    `);

  // Do stuff

  callback();
};
