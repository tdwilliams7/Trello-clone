import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, changeStage } from '../../store/actions';

import './InProgress.css'


class InProgress extends Component {

  // actions/index line 17
  componentDidMount() {
    this.props.getItems();
  }

  advanceStageHandler = ({ target }) => {
    const targetId = Number(target.id);
    let items = this.props.items.slice(0);
    let newItems = items.map(item => {
      if (item.id === targetId) {
        return {...item, stage: 'completed'}
      }
      return item;
    });
    this.props.changeStage(newItems);
  }

  render() {
    return (
      <div className='InProgress'>
        <h1>In Progress Component</h1>
        {this.props.items.map(item => {
          if (item.stage === 'InProgress') {
            return <div key={item.id}>
              {item.text}
              <button id={item.id} onClick={this.advanceStageHandler}>Completed</button>
              </div>
          }
          return;
        })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
  }
}
export default connect(mapStateToProps, { getItems, changeStage })(InProgress);
