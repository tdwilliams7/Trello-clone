import React, { PureComponent } from "react";
import "./Checklist.css";
class Checklist extends PureComponent {
  constructor(props) {
    super(props);
    // status false = "complete" true = ""
    this.state = {
      todos: [{ name: "figure this out", status: true }],
      newTodo: ""
    };
  }

  componentDidMount() {
    this.setState({
      todos: this.props.todos
    });
  }

  handleTodoComplete = target => {
    const todos = this.state.todos.slice(0);
    const newTodos = todos.map(todo => {
      if (todo.name === target) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    const todo = { name: this.state.newTodo, status: false };
    console.log(todo);
    this.setState({
      newTodo: "",
      todos: [...this.state.todos, todo]
    });
  };

  render() {
    return (
      <div>
        <h1>Checklist component</h1>
        <div>
          {this.state.todos.map((todo, i) => {
            let classStyle;
            if (todo.status) {
              classStyle = "complete";
            } else {
              classStyle = "";
            }
            return (
              <div
                key={i}
                className={classStyle}
                onClick={() => this.handleTodoComplete(todo.name)}
              >
                {todo.name}
              </div>
            );
          })}
          <div>
            <form onSubmit={this.handleTodoSubmit}>
              <input
                onChange={this.handleInputChange}
                placeholder="New todo item"
                name="newTodo"
                value={this.state.newTodo}
              />
              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checklist;
