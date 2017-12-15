# pubsub-toolkit
A toolkit of node.js scripts to manage Google cloud PubSub topics

## Setup local development environment
1. Get the relevant binary or source code from the node.js [download page](https://nodejs.org/en/download/) and install. Check node and node package manager version with `node -v` and `npm -v` respectively.
2. Clone this repository and cd into it: `git clone git@github.com:rowjay/pubsub-toolkit.git && cd pubsub-toolkit`
3. Install dependencies: `npm install`

## Pubsub

### Message format
```javascript
{
  "data": string,
  "attributes": {
    string: string,
    ...
  },
  "messageId": string,
  "publishTime": string,
}
```

## Functions
1. Create storage bucket for functions
2. Write *index.js*, *package.json*, and *config.json* files
3. Deploy function to be executed (in index.js) by upload, storage, or repo. Note this is configured with json files.
4. 

Functions can be triggered by HTTP, Pubsub message, or Storage events.
Background functions take 'event' and 'callback' parameters

### Event
The event is a javascript object
```javascript
{
  'eventId': 'unique ID',
  'timestamp': 'ISO 8601 created datetime',
  'eventType': 'type of event',
  'resource': 'what emitted this event'
  'data': {
    'key': 'value'
  }
}
```
### Callback
Signals completion
```javascript
// Success
callback(null, 'Win!');
// Failure
callback(new Error('oops'));
```
### Manual Triggers
#### Direct
Eg.
```bash
DATA=$(printf 'Example'|base64) && gcloud beta functions call functionName --data '{"x":"'$DATA'"}'
```
#### Pubsub
To manually invoke pubsub triggered function:
```
gcloud beta functions call functionName --data '{"data": "payload", "attributes": {"key0": "value0"}}'
```


## Links
[Pubsub message format](https://cloud.google.com/pubsub/docs/reference/rest/v1/PubsubMessage)
[Functions events and callbacks](https://cloud.google.com/functions/docs/writing/background)
[PubSub API client node.js](https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/master/pubsub)
