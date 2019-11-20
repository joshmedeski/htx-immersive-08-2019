import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions/todo-actions";

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
    // Clear form after adding
    this.setState({ inputText: "" });
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(AddTodoForm);
