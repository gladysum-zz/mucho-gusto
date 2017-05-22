import React from 'react';
import {List, ListItem} from 'material-ui/List';

export default class Chat extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    console.log('this.clientHeight', this.clientHeight)
  }

  handleScroll() {
    if (this.scrollTop + this.clientHeight < this.scrollHeight) {
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
    if (!this.scrolledUp) this.scrollTop = this.scrollHeight;
  }

  render() {

    return (
      <div className="chat" onScroll={this.handleScroll}>
      <List>
        {this.props.messages.map((message, index) =>
          <ListItem
            secondaryText={message[0].toUpperCase() + ': ' + message[1]}
            key={index}
          />
        )}
      </List>
      </div>
    )
  }
}


