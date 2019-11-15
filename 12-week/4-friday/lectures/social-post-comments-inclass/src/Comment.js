import React from "react";

export default function Post(props) {
  return (
    <div className="post-comment">
      <p className="post-comment-name">
        <strong>{props.name}</strong>
      </p>
      <p className="post-comment-content">{props.content}</p>
    </div>
  );
}
