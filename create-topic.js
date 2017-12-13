'use strict';

const PubSub = require(`@google-cloud/pubsub`);

function createTopic (name) {
  // Create client object
  const ps = PubSub();
  // Create topic,
  return ps.createTopic(name)
    .then((results) => {
      const topic = results[0];
      // Output to console
      console.log(`Created new topic: ${topic.name}`);
      return topic;
    });
}
