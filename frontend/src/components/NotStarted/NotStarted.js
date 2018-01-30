import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, addItem } from '../../store/actions'

class NotStarted extends Component {
  state = {
    text: '',
  }

  componentDidMount() {
      this.props.getItems();
  }

  inputChangeHandler = ({target}) => {
    this.setState({
      text: target.value,
    })
  }

  addItemHandler = () => {
    const newItem = { text: this.state.text, stage: 'notStarted', }
    console.log(newItem);
    this.props.addItem(newItem);
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <h1>Not Started Component</h1>
        <div>
          <input placeholder='New Thing' onChange={this.inputChangeHandler} value={this.state.text}
            ></input>
          <button onClick={this.addItemHandler}>Add</button>
        </div>
        <div>
          <h3>Things that need work</h3>

          {this.props.items.map(item => {
            if (item.stage === 'notStarted') {
              return (<div key={item.id}>
                <div>{item.text}</div>
                <button id={item.id} >Delete</button>
                <button id={item.id} >In progress</button>
              </div>)
            }
            return;
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { getItems, addItem })(NotStarted);
