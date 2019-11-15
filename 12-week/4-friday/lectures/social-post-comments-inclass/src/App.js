import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handelNewPostSubmission = this.handelNewPostSubmission.bind(this);
    this.handelNewPostOnChange = this.handelNewPostOnChange.bind(this);

    this.state = {
      posts: [],
      newPost: {
        postName: "",
        postContent: ""
      }
    };
  }

  handelNewPostOnChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState(currentState => {
      return {
        newPost: {
          ...currentState.newPost,
          [name]: value
        }
      };
    });
  }

  handelNewPostSubmission(event) {
    // Don't reload page after form is submitted
    event.preventDefault();
    this.setState(currentState => {
      return {
        // Add new post to posts array
        posts: currentState.posts.concat([currentState.newPost]),
        // Reset form values
        newPost: { postName: "", postContent: "" }
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Social Post Comments Exercise</h1>
        <form onSubmit={this.handelNewPostSubmission} className="post-form">
          <h3>Create New Post</h3>
          <label>Name</label>
          <input
            onChange={this.handelNewPostOnChange}
            value={this.state.newPost.postName}
            name="postName"
            type="text"
            placeholder="Enter your name"
          />
          <textarea
            onChange={this.handelNewPostOnChange}
            value={this.state.newPost.postContent}
            name="postContent"
            cols="30"
            rows="10"
          ></textarea>
          <button>Submit</button>
        </form>
        {/* loop through post */}
        <h2>Posts</h2>
        <div className="post">
          <p className="post-name">
            <strong>Josh</strong>
          </p>
          <p className="post-content">Hello world, this is my first post.</p>
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
      </div>
    );
  }
}
