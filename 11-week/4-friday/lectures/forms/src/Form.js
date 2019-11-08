import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", comments: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => {
      let newComments = [...state.comments];
      newComments.push(state.value);
      return { value: "", comments: newComments };
    });
  }

  render() {
    let comments = this.state.comments.map(comment => {
      return <li>{comment}</li>;
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Comment</label>
        <br />
        <input
          name="value"
          type="text"
          value={this.state.value}
          placeholder="Enter comment"
          onChange={this.handleChange}
        />
        <button>Submit</button>

        <h3>Comments</h3>
        <ul>{comments}</ul>
      </form>
    );
  }
}
