import React, { Component } from "react";

class Users extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Users;
