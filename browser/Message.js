import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const Message = props => (
  <div key={props.index} style={{textAlign: (props.message[0] === 'me') ? "left" : "right"}}>
    <Paper className="statement-bubble" zDepth={1} style={{verticalAlign: "middle", display: "inline-block"}} id={`statement-by-${props.message[0]}`}>
      <li>
        {props.message[1]}
      </li>
    </Paper>
    {props.message[0] === 'watson' ? <Avatar style={{verticalAlign: "middle", display: "inline-block"}} src="./images/penguin-face-150.png" /> : null}
  </div>
)

export default Message;