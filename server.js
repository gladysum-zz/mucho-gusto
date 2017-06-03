'use strict';

//provides access to cloud foundry env
const cfenv = require('cfenv')

//get app env from cloud foundry
const appEnv = cfenv.getAppEnv()

const express = require('express');
const app = express();
const {resolve} = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const dotenv = require('dotenv');

const ConversationV1 = require('watson-developer-cloud/conversation/v1');
dotenv.config();

// Serve static files from ../public
app.use(express.static(resolve(__dirname, 'public')));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

//initialize conversation variables
var convUserName, convPassWord;
const convWorkspaceID = 'ff557866-e9ad-4693-bcbd-9a654c85c439'

if (!appEnv) {
  app.listen(3000, function () {
    console.log('Server listening on port', 3000);
  });

  convUserName = process.env.CONVERSATION_USERNAME
  convPassWord = process.env.CONVERSATION_PASSWORD

}
else {
  app.listen(appEnv.port, function () {
    console.log('Server listening on', appEnv.url);
  });

  //convUserName = appEnv.app.conversation.   VCAP_SERVICES.conversation[0].credentials.username;
  //convPassWord = appEnv.VCAP_SERVICES.conversation[0].credentials.password;
}

var conversation = new ConversationV1({
  username: convUserName,  // add username
  password: convPassWord,  // add password
  path: { workspace_id: convWorkspaceID },  // add workspace id
  version_date: '2017-04-21'
});

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

    console.log('convUserName inside Promise', convUserName)
    console.log('convPassWord inside Promise', convPassWord)

    conversation.message({
      workspace_id: convWorkspaceID,  // add workspace id
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


