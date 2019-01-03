import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
  return (
    <div className="userOutput">
      <p>This is paragraph 1. </p>
      <p>This is paragraph 2. Written by {props.username} </p>
    </div>
  );
};

export default userOutput;