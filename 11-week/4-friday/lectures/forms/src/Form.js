import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", comment: "", comments: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => {
      let newComments = [...state.comments];
      newComments.push({ name: state.name, comment: state.comment });
      return { name: "", comment: "", comments: newComments };
    });
  }

  render() {
    let comments = this.state.comments.map(item => {
      return (
        <li>
          {item.name}: {item.comment}
        </li>
      );
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Comment</label>
        <br />
        <input
          name="name"
          type="text"
          value={this.state.name}
          placeholder="Enter your name"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          name="comment"
          type="text"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>

        <h3>Comments</h3>
        <ul>{comments}</ul>
      </form>
    );
  }
}
