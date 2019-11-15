import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.callbackOnNewPostSubmit = this.callbackOnNewPostSubmit.bind(this);
  }

  callbackOnNewPostSubmit(newPost) {
    this.setState(currentState => {
      return {
        posts: [newPost].concat(currentState.posts)
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Social Post Comments Exercise</h1>
        <NewPost parentCallbackOnSubmit={this.callbackOnNewPostSubmit} />
        <h2>Posts</h2>
        {this.state.posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </div>
    );
  }
}
