import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = event.target.value;
    // Update the state with user's input
    this.setState({
      messages: this.state.messages.concat([['Me', input]]),
      value: ''
    });
    // Send input to Watson; update state with Watson's response
    axios.post('/', {input: input})
    .then(response=>{this.setState({messages: this.state.messages.concat([['Watson', response]])})})
    .catch(error=>{console.log(error)});
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
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField hintText="Enter text here" value={this.state.value} onChange={this.handleChange}/>
            </div>

            <div>
              <RaisedButton label="Submit" primary={true} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}