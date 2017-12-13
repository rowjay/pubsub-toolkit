'use strict';

const PubSub = require(`@google-cloud/pubsub`);

function listAllTopics () {
  // Create client object
  const ps = PubSub();
  // List topics
  return ps.getTopics()
    .then((results) => {
      const topics = results[0];
      // Output to console
      console.log(`Project topics:`);
      topics.forEach((topic) => console.log(`\t${topic.name}`));
      return topics;
    });
}
