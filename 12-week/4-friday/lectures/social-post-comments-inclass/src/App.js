import React from "react";

export default function App() {
  return (
    <div className="container">
      <h1>Posts</h1>
      <h2>Create New Post</h2>
      <form className="post-form">
        <label>Name</label>
        <input
          name="post-form-name"
          type="text"
          placeholder="Enter your name"
        />
        <textarea name="post-form-content" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>
      {/* loop through post */}
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
