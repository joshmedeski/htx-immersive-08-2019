import React from "react";
import { connect } from "react-redux";
import { increment as incrementAction } from "../redux/actions/counter-actions";

function IncrementButton({ increment }) {
  return (
    <button type="button" onClick={increment}>
      Increment
    </button>
  );
}

const mapDispatchToProps = {
  increment: incrementAction
};

export default connect(null, mapDispatchToProps)(IncrementButton);
