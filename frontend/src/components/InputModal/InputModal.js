import React, { Component } from "react";

class InputModal extends Component {
  state = {
    text: "",
    description: "",
    assigned: "",
    owner: "",
    links: ""
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.setState({
      text: "",
      description: "",
      assigned: "",
      owner: "",
      links: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Oh Boy, More to do!</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input
              placeholder="title"
              name="text"
              onChange={this.inputChangeHandler}
              value={this.state.text}
            />
          </div>
          <div>
            <textarea
              rows="5"
              cols="50"
              placeholder="Description"
              name="description"
              onChange={this.inputChangeHandler}
              value={this.state.description}
            />
          </div>
          <div>
            <input
              placeholder="Assigned to:"
              name="assigned"
              onChange={this.inputChangeHandler}
              value={this.state.assigned}
            />
          </div>
          <div>
            <input
              placeholder="Feature Owner: "
              name="owner"
              onChange={this.inputChangeHandler}
              value={this.state.owner}
            />
          </div>
          <div>
            <input
              placeholder="supporting links"
              name="links"
              onChange={this.inputChangeHandler}
              value={this.state.links}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default InputModal;
