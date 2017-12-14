'use strict';

// Google's PubSub module
const PubSub = require(`@google-cloud/pubsub`);
// Create PubSub client object
const client = PubSub();

publish = function publish (req, res) {

  console.log(`Publishing message to topic: ${req.body.topic}`);
  // Get topic
  const topic = client.topic(req.body.topic);

  var UUID = '2034584734';

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

  // Push into data list
  Object.keys(req.body.message).forEach(function(key) {
    data.push({key: req.body.message[key]});
  });

  var message0 = {
    data: publishData,
    attributes: {
      // key: 'value'
      // ID of something that created the message
      'UUID': UUID
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
  return topic.publish(message)
    .then(() => res.status(200).send(`Published message to topic: ${req.body.topic}`))
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
      return Promise.reject(err);
    });
};
