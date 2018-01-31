import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Components
import NotStarted from './components/NotStarted/NotStarted';
import InProgress from './components/InProgress/InProgress';
import Completed from './components/Completed/Completed';

class App extends Component {
  state = {
    newItem: '',
    // items: [{ text: 'Clean Bathroom', stage: 'notStarted', id: 99 }, { text: 'Dust', stage: 'InProgress', id: 98 }, { text: 'Post Office', stage: 'InProgress', id: 94 }],
    // id: 0
  }

  // deleteItemHandler = ({target}) => {
  //   let items = this.state.items.slice(0);
  //   const targetId = Number(target.id);
  //   const newItems = items.filter(item => {
  //     if (item.id !== targetId) {
  //       return item;
  //     }
  //     return;
  //   })
  //   this.setState({
  //     items: newItems
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trello Clone</h1>
        </header>
        <NotStarted />
        <InProgress />
        <Completed />
      </div>
    );
  }
}

export default connect(null)(App);
