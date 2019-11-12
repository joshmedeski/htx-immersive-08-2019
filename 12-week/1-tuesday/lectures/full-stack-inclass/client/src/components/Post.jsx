import React from "react";

export default function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <small>Created on: {props.createdAt}</small>
    </div>
  );
}
