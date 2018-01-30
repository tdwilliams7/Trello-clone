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
    items: [{ text: 'Clean Bathroom', stage: 'notStarted', id: 99 }, { text: 'Dust', stage: 'InProgress', id: 98 }, { text: 'Post Office', stage: 'InProgress', id: 94 }],
    id: 0
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      newItem: target.value,
    })
  }

  addItemHandler = () => {
    let items = this.state.items.splice(0);
    let id = this.state.id;
    const newItem = { text: this.state.newItem, stage: 'notStarted', id: this.state.id}
    items = [...items, newItem];
    this.setState({
      newItem: '',
      id: id += 1,
      items,
    })
  }

  deleteItemHandler = ({target}) => {
    let items = this.state.items.slice(0);
    const targetId = Number(target.id);
    const newItems = items.filter(item => {
      if (item.id !== targetId) {
        return item;
      }
    })
    this.setState({
      items: newItems
    })
  }

  markCompletedHandler = ({ target }) => {
    let items = this.state.items.slice(0);
    const targetId = Number(target.id);
    const updatedItems = items.map(item => {
      if (item.id === targetId) {
        return {...item, stage: 'inProgress'};
      }
      return item;
    })
    this.setState({
      items: updatedItems,
    })
    console.log(this.state.items)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Trello Clone</h1>
        </header>
        <NotStarted newItem={this.state.newItem} inputChangeHandler={this.inputChangeHandler} addItemHandler={this.addItemHandler} markCompletedHandler={this.markCompletedHandler} />
        <InProgress />
        <Completed />
      </div>
    );
  }
}

export default connect(null)(App);
