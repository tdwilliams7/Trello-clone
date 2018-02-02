import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
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
        <Grid container spacing={0}>
          <Grid item md={4} lg={4}>
            <NotStarted />
          </Grid>
          <Grid item md={4} lg={4}>
            <InProgress />
          </Grid>
          <Grid item md={4} lg={4}>
            <Completed />
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default connect(null)(App);
