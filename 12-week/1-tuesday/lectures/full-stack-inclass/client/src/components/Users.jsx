import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    );
  }
}
