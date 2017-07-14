import React from 'react';
import Message from './Message';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if ((this.chatScroll.scrollTop + this.chatScroll.clientHeight) < this.chatScroll.scrollHeight) {
      this.scrolledUp = true;
    }
    else {
      this.scrolledUp = false;
    }
  }

  componentDidMount() {
    this.scrolledUp = false;
  }

  componentDidUpdate() {
    if (!this.scrolledUp) this.chatScroll.scrollTop = this.chatScroll.scrollHeight;
  }

  render() {
    return (
      <div id="chat-background">
      <ul
        className="chat"
        onScroll={this.handleScroll}
        ref={div => {this.chatScroll = div}}
      >
        {this.props.messages.map((message, index) => <Message message={message} index={index} />)}
      </ul>
      </div>
    )
  }
}

