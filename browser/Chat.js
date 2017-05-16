import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      'messages': [['Me', 'What time is it?'], ['Watson', 'The current time is 3:14PM']]
    };
  }

  render () {
    return (
      <div className="background">

        <div className="chat-container">
          <List>
            {this.state.messages.map((message, index) =>
              <ListItem
                secondaryText={message[0].toUpperCase() + ': ' + message[1]}
                key={index}
              />
            )}
          </List>

          <div>
            <TextField hintText="Enter text here" />
          </div>

          <div>
            <RaisedButton label="Submit" primary={true} />
          </div>
        </div>




      </div>
    )
  }
}