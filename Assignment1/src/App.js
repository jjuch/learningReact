import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Jasper!'
  }

  changeUsernameHandler = (event) => {
    this.setState( {
      username: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.changeUsernameHandler}/>
        <UserOutput username="Jasper" />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
