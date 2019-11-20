import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux/actions/todo-actions";

function TodoItem({ task, toggleItem, deleteItem }) {
  return (
    <li>
      {task.text}{" "}
      <button type="button" onClick={() => toggleItem(task.id)}>
        Toggle
      </button>
      <button type="button" onClick={() => deleteItem(task.id)}>
        Delete
      </button>
      <br />
      {task.isCompleted ? "Complete" : "Incomplete"}
    </li>
  );
}

const mapDispatchToProps = {
  toggleItem: toggleTodo,
  deleteItem: deleteTodo
};

export default connect(null, mapDispatchToProps)(TodoItem);
