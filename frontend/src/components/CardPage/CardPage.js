import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleItem } from "../../store/actions";

import Checklist from "../Checklist/Checklist";

class CardPage extends PureComponent {
  componentDidMount() {
    this.props.getSingleItem(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Card Page components</h1>
        <ul>
          {this.props.items.map(item => {
            return (
              <li key={item.id}>
                <div>{item.text}</div>
                <div>{item.description}</div>
                <Checklist todos={item.checklist} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default withRouter(
  connect(mapStateToProps, { getSingleItem })(CardPage)
);
