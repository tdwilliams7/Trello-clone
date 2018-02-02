import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, addItem, changeStage } from '../../store/actions';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import './NotStarted.css'


class NotStarted extends Component {
  state = {
    text: '',
  }

  // actions/index line 17
  componentDidMount() {
      this.props.getItems();
  }


  // actions/index line 41
  advanceStageHandler(id) {
    const targetId = Number(id);
    let items = this.props.items.slice(0);

    let newItems = items.map(item => {
      if (item.id === targetId) {
        return {...item, stage: 'InProgress'}
      }
      return item;
    });
    console.log(newItems)
    this.props.changeStage(newItems);
  }

  render() {
    return (
      <div className="NotStarted">
        <h1>Not Started Component</h1>

        <div>
          <h3>Things that need work</h3>

          {this.props.items.map(item => {
            if (item.stage === 'notStarted') {
              return (<div key={item.id} >
                <div>{item.text}</div>
                <Button id={item.id} onClick={this.advanceStageHandler.bind(this, item.id)}>In progress</Button>
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
