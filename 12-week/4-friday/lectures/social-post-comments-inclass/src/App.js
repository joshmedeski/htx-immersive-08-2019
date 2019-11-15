import React from "react";
import NewPost from "./NewPost";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.callbackOnNewPostSubmit = this.callbackOnNewPostSubmit.bind(this);
  }

  callbackOnNewPostSubmit(newPost) {
    this.setState(currentState => {
      return { posts: [newPost].concat(currentState.posts) };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Social Post Comments Exercise</h1>
        <NewPost parentCallbackOnSubmit={this.callbackOnNewPostSubmit} />
        {/* loop through post */}
        <h2>Posts</h2>
        {this.state.posts.map(post => {
          return (
            <div className="post">
              <p className="post-name">
                <strong>{post.name}</strong>
              </p>
              <p className="post-content">{post.content}</p>
              <hr />
              <div className="post-comments">
                <h3>Comments</h3>
                {/* loop through post comment */}
                <div className="post-comment">
                  <p className="post-comment-name">
                    <strong>Scott</strong>
                  </p>
                  <p className="post-comment-content">First</p>
                </div>
                <form className="post-comments-form">
                  <h3>Create New Comment</h3>
                  <label>Name</label>
                  <input
                    type="text"
                    name="post-comment-form-name"
                    placeholder="Enter your name"
                  />
                  <input
                    type="text"
                    name="post-comment-form-content"
                    placeholder="Enter your comment"
                  />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
