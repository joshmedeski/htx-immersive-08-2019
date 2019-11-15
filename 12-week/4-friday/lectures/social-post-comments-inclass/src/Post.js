import React from "react";
import Comment from "./Comment";
import NewPost from "./NewPost";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      content: this.props.content,
      comments: []
    };
    this.callbackOnNewCommentSubmit = this.callbackOnNewCommentSubmit.bind(
      this
    );
  }

  callbackOnNewCommentSubmit(newComment) {
    this.setState(currentState => {
      return {
        comments: currentState.comments.concat([newComment])
      };
    });
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
          <NewPost parentCallbackOnSubmit={this.callbackOnNewCommentSubmit} />
        </div>
      </div>
    );
  }
}
