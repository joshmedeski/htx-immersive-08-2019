import React from "react";
import { connect } from "react-redux";
import { increment } from "../redux/actions";

function IncrementButton({ increment }) {
  return (
    <button type="button" onClick={increment}>
      Increment
    </button>
  );
}

const mapDispatchToProps = {
  increment: increment
};

export default connect(null, mapDispatchToProps)(IncrementButton);
