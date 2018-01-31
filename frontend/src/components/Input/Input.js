import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions';

// components

class Input extends Component {
  state = {
    state: '',
  }

  inputChangeHandler = ({target}) => {
    this.setState({
      text: target.value,
    })
  }

  // actions/index line 31
  addItemHandler = (event) => {
    event.preventDefault();
    const newItem = { text: this.state.text, stage: 'notStarted', }
    console.log(newItem);
    this.props.addItem(newItem);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <h1>Input Component</h1>
        <form onSubmit={this.addItemHandler}>
          <input placeholder='New Thing' onChange={this.inputChangeHandler} value={this.state.text}
            ></input>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addItem, })(Input);
