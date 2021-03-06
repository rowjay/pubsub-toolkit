'use strict';

// Google's PubSub client library module
const PubSub = require(`@google-cloud/pubsub`);
// Create PubSub client object
const client = PubSub();

const Buffer = require('safe-buffer').Buffer;

/**
 * create() makes a pubsub topic
 * based on req the event data
 *
 * @param <String> event.data.data.topicName
 *
 * to use, publish {"topicName": "hello"}
 * to subscribed topic
 */

exports.createTopic = function createTopic(event, callback) {
  const pubsubMessage = event.data;
  const data = Buffer.from(pubsubMessage.data, 'base64').toString();
  console.log(`data: ${data}`);


  const topicName = data.topicName;
  console.log(`Topic Name: ${topicName}`);
  // Get client object
  const client = PubSub();

  // Create topic,
  client.createTopic(topicName)
    .then((results) => {
      const topic = results[0];
      // Output to console
      console.log(`Created new topic: ${topic.name}`);
    });

  callback();
};
