'use strict';

// Provides access to cloud foundry env
const cfenv = require('cfenv')

// Get app env from cloud foundry
const appEnv = cfenv.getAppEnv()

const express = require('express');
const app = express();
const {resolve} = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Loads environment variables from a .env file into process.env
const dotenv = require('dotenv');
dotenv.config();

// Serve static files from ../public
app.use(express.static(resolve(__dirname, 'public')));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

app.listen(appEnv.port, function () {
  console.log('Server listening on', appEnv.url);
})

const ConversationV1 = require('watson-developer-cloud/conversation/v1');

// When app runs locally, process.env variables are used
// Otherwise, variables are sourced from appEnv



const workspaceID = appEnv.workspaceID;
console.log(cfenv);
var conversation = new ConversationV1({
  username: process.env.CONVERSATION_USERNAME,
  password: process.env.CONVERSATION_PASSWORD,
  path: { workspace_id: workspaceID },
  version_date: '2017-04-21'
});

// User submits a message and Watson provides a response
app.post('/', (req, res, next)=> {
  var context = {};
  context.hour = -1;
  context.minute = -1;
  var d = new Date();
  context.period = d.getHours() < 12 ? 'AM' : 'PM';
  context.hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  context.minute = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes().toString();

  let message = req.body.input;
  return new Promise((resolve, reject)=>{
    var output;
    conversation.message({
      workspace_id: workspaceID,
      input: {'text': message},
      context: context
    },
    (error, response)=>{
      if (error) console.error('error: ' + error.message);
      else {
        output = response.output.text[0];
        context = response.context;
      }
      return resolve(output);
    });
  })
  .then(output=>{res.json(output)})
  .catch(next);
});


