import React from 'react';

const userInput = (props) => {
  const inputStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px solid red',
    width: '60%',
    margin: '16px auto',
    padding: '16px'
  };

  return (
    <div>
      <input 
        type="text" 
        onChange={props.change} 
        value={props.username} 
        style={inputStyle}/>
    </div>
  );
};

export default userInput;