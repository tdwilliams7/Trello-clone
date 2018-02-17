import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

// Components
import Input from "./components/Input/Input";
import CardPage from "./components/CardPage/CardPage";

import Home from "./components/Home/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    newItem: ""
  };

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Trello Clone</h1>
              <Input />
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/item/:id" component={CardPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null)(App);
