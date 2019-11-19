import React from "react";
import { connect } from "react-redux";

function CounterDisplay({ number }) {
  return <h2>Count: {number}</h2>;
}

const mapStateToProps = state => ({ number: state });

export default connect(mapStateToProps)(CounterDisplay);
