import React, { Component } from 'react';

class NotStarted extends Component {

  render() {
    return (
      <div>
        <h1>Not Started Component</h1>
        <div>
          <input placeholder='New Thing' onChange={this.props.inputChangeHandler} value={this.props.newItem}
            ></input>
          <button onClick={() => this.props.addItemHandler()}>Add</button>
        </div>
        <div>
          <h3>Things that need work</h3>

          {this.props.items.map(item => {
            if (item.stage === 'notStarted') {
              return (<div key={item.id}>
                <div>{item.text}</div>
                <button id={item.id} onClick={this.props.deleteItemHandler}>Delete</button>
                <button id={item.id} onClick={this.props.markCompletedHandler}>In progress</button>
              </div>)
            }
            return;
          })}
        </div>
      </div>
    )
  }
}

export default NotStarted;
