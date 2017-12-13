'use strict';

const PubSub = require(`@google-cloud/pubsub`);

function deleteTopic (name) {
  // Create client object
  const ps = PubSub();
  // Get topic
  const topic = pubsub.topic(name);
  // Delete topic
  return topic.delete()
    .then(() => {
      console.log(`Deleted topic: ${topic.name}`);
    });
}
