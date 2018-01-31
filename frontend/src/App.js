import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Components
import NotStarted from './components/NotStarted/NotStarted';
import InProgress from './components/InProgress/InProgress';
import Completed from './components/Completed/Completed';
import Input from './components/Input/Input';

class App extends Component {
  state = {
    newItem: '',
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trello Clone</h1>
          <Input />
        </header>
        <NotStarted />
        <InProgress />
        <Completed />
      </div>
    );
  }
}

export default connect(null)(App);
