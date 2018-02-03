import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../store/actions";
import './Completed.css';

import ListCard from '../ListCard/ListCard';

class Completed extends Component {
  // actions/index line 17
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    return (
      <div className="Completed">
        <h1>Completed Component</h1>
        {this.props.items.map(item => {
          if (item.stage === "completed") {
            // return <div key={item.id}>{item.text}</div>;
            return <ListCard item={item}/>
          }
          return;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, { getItems })(Completed);
