'use strict';

var PubSub = require(`@google-cloud/pubsub`);
// Create client object
const client = PubSub();

const Buffer = require('safe-buffer').Buffer;

/**
 * Publishes a list of topics.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.listTopics = function listTopics (event, callback) {

  client.getTopics(function(err, results) {
    if (!err) {
      var topics = results.topics
    }
  });
  
  var topic = client.topic('list');
  
  var publisher = topic.publisher();
  
  publisher.publish(new Buffer(topics), function(err, messageId) {
    if (!err) {
    }
  });
  
  callback();
};
