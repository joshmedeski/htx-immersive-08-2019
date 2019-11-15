import React from "react";

export default class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    };

    this.handelOnChange = this.handelOnChange.bind(this);
    this.handelOnSubmit = this.handelOnSubmit.bind(this);
  }

  handelOnChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  handelOnSubmit(event) {
    // Don't reload page after form is submitted
    event.preventDefault();
    this.setState(currentState => {
      // Send state data to parent
      this.props.parentCallbackOnSubmit(currentState);
      return { name: "", content: "" };
    });
  }

  render() {
    return (
      <form onSubmit={this.handelOnSubmit} className="post-form">
        <h3>Create New Post</h3>
        <label>Name</label>
        <input
          onChange={this.handelOnChange}
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Enter your name"
        />
        <textarea
          onChange={this.handelOnChange}
          value={this.state.content}
          name="content"
          cols="30"
          rows="10"
        ></textarea>
        <button>Submit</button>
      </form>
    );
  }
}
