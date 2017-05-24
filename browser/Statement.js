import React from 'react';
import Chip from 'material-ui/Chip';

function Statement(props) {
  return (
    <li className="list-item">
    <div className="statement-container">
    <Chip backgroundColor="white">
      {props.message}
    </Chip>
    </div>
    </li>
    );
}

export default Statement
