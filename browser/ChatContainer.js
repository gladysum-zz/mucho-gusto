import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Chat from './Chat';

export default class ChatContainer extends React.Component {
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
    let input = this.state.value;
    // Update the state with user's input
    this.setState({
      messages: this.state.messages.concat([['Me', input]]),
      value: ''
    });
    // Send input to Watson; update state with Watson's response
    axios.post('/', {input: input})
    .then(res=>res.data)
    .then(response=>{this.setState({messages: this.state.messages.concat([['Watson', response]])})})
    .catch(error=>{console.log(error)});
  }

  render () {
    return (
      <div className="chat-container">
        <Chat messages={this.state.messages} />
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <TextField hintText="Type a message..." value={this.state.value} onChange={this.handleChange}/>
          </div>
          <div className="submit-button">
            <RaisedButton type="submit" label="Submit" primary={true} />
          </div>
        </form>
      </div>
    )
  }
}