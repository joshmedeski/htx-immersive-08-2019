import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(task => {
        return <TodoItem key={task.id} task={task} />;
      })}
    </ul>
  );
}

const mapStateToProps = state => ({ todos: state.todos });

// Same as this 👇️
// function mapStateToProps(state) {
//   return { todos: state.todos };
// }

export default connect(mapStateToProps)(TodoList);
