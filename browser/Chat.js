import React from 'react';
import ChatContainer from './ChatContainer';

export default class Chat extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
  <div className="background">
    <div className="chat-col-left">
    </div>
    <div className="chat-col-middle">
      <div className="chat-title">
      Chat with Paco in Spanish
      </div>
      <ChatContainer />
    </div>
    <div className="chat-col-right">
    </div>
  </div>
    )
  }
}

