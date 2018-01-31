import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions';

// components
import InputModal from '../InputModal/InputModal'

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
        <InputModal />
      </div>
    )
  }
}

export default connect(null, { addItem, })(Input);
