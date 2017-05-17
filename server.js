'use strict';

const express = require('express');
const app = express();
app.use(express.static(__dirname));
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
const dotenv = require('dotenv');
const ConversationV1 = require('watson-developer-cloud/conversation/v1');
dotenv.config();

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

var conversation = new ConversationV1({
  username: process.env.CONVERSATION_USERNAME,  // add username
  password: process.env.CONVERSATION_PASSWORD,  // add password
  path: { workspace_id: process.env.CONVERSATION_WORKSPACE_ID },  // add workspace id
  version_date: '2017-04-21'
});

app.post('/', (req, res, next)=> {

  var context = {};
  context.hour = -1;
  context.minute = -1;
  var d = new Date();
  context.period = d.getHours() < 12 ? 'AM' : 'PM';
  context.hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  context.minute = d.getMinutes();

  let message = req.body.input;
  return new Promise((resolve, reject)=>{
    var output;
    conversation.message({
      workspace_id: process.env.CONVERSATION_WORKSPACE_ID,  // add workspace id
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


