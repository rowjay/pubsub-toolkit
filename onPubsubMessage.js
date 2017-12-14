'use strict';

// Google's PubSub client library module
const PubSub = require(`@google-cloud/pubsub`);
// Create PubSub client object
const client = PubSub();

const Buffer = require('safe-buffer').Buffer;

exports.onPubsubMessage = function (event, callback) {
  // event
  // event.eventId
  // event.timestamp
  // event.eventType
  // event.resource
  // event.data
  // event.data.data
  // event.data.attributes
  // event.data.attributes.key
  // event.data.messageId
  // event.data.publishTime
  //
  
  // string. Unique ID for event
  const eventId = event.eventId
  
  // string. iso 8601 datetime event created
  const timestamp = event.timestamp
  
  // string. the type of event
  const eventType = event.eventType
  
  // string. what made this event
  const resource = event.resource
  
  // For a Pubsub message:
  // The payload is a message object in event.data
  const pubsubMessage = event.data;
  
  // In base64 encoding
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
