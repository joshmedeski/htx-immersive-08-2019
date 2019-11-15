import React from "react";
import Comment from "./Comment";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.post.name,
      content: this.props.post.content,
      comments: []
    };
  }

  render() {
    return (
      <div className="post">
        <p className="post-name">
          <strong>{this.state.name}</strong>
        </p>
        <p className="post-content">{this.state.content}</p>
        <hr />
        <div className="post-comments">
          <h3>Comments</h3>
          {/* loop through post comment */}
          {this.state.comments.map((comment, index) => {
            return (
              <Comment
                name={comment.name}
                content={comment.content}
                key={index}
              />
            );
          })}
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
  }
}
