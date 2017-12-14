'use strict';

// Google's PubSub module
const PubSub = require(`@google-cloud/pubsub`);
// Create PubSub client object
const client = PubSub();

const Buffer = require('safe-buffer').Buffer;

exports.publishMessage = function publishMessage (event, callback) {

  // For a Pubsub message:
  // The payload is a message object in event.data
  const pubsubMessage = event.data;
  
  // In base64 encoding
  const data = Buffer.from(pubsubMessage.data, 'base64').toString()

  // Get topic
  const topic = client.topic(data.topic);

  var publishData =
    {
      "key0": 'value0',
      "key1": {
        "key1a": "value1a",
        "key1b": "value1b",
      }
    },
    {
      property1a: 'key1a',
      property1b: 'key1b'
    }
  ];

  var message0 = {
    data: publishData,
    attributes: {
      // key: 'value'
      // ID of something that created the message
      'UUID': 6874784585
    }
    // messageId and publishTime are added automatically
  };

  var message1 = {
    data: {
      message: req.body.message
    },
    attributes: {
      // key: 'value'
      // ID of something that created the message
      'UUID': UUID
    }
  };

  // Publish the message
  topic.publish(message)
    .then(() => res.status(200).send(`Published message to topic: ${req.body.topic}`))
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
      return Promise.reject(err);
    });
};
