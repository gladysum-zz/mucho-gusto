import React from 'react';

function Statement(props) {
  return (
    <div className="statement-container">
    <li>
      {props.message}
    </li>
    </div>
    );
}

export default Statement
