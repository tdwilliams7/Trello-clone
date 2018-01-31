import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, addItem, changeStage } from '../../store/actions'

class NotStarted extends Component {
  state = {
    text: '',
  }

  // actions/index line 17
  componentDidMount() {
      this.props.getItems();
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

  // actions/index line 41
  advanceStageHandler = ({ target }) => {
    const targetId = Number(target.id);
    let items = this.props.items.slice(0);
    console.log(targetId);
    let newItems = items.map(item => {
      if (item.id === targetId) {
        return {...item, stage: 'InProgress'}
      }
      return item;
    });
    this.props.changeStage(newItems);
  }

  render() {
    return (
      <div>
        <h1>Not Started Component</h1>
        <form onSubmit={this.addItemHandler}>
          <input placeholder='New Thing' onChange={this.inputChangeHandler} value={this.state.text}
            ></input>
          <button>Add</button>
        </form>
        <div>
          <h3>Things that need work</h3>

          {this.props.items.map(item => {
            if (item.stage === 'notStarted') {
              return (<div key={item.id}>
                <div>{item.text}</div>
                <button id={item.id} >Delete</button>
                <button id={item.id} onClick={this.advanceStageHandler}>In progress</button>
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

export default connect(mapStateToProps, { getItems, addItem, changeStage })(NotStarted);
