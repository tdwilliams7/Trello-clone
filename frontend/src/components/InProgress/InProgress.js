import React, { Component } from 'react';

class InProgress extends Component {

  render() {
    return (
      <div>
        <h1>In Progress Component</h1>
        {this.props.items.map(item => {
          if (item.stage === 'InProgress') {
            return <div key={item.id}>{item.text}</div>
          }
          return;
        })}
      </div>
    )
  }
}

export default InProgress;
