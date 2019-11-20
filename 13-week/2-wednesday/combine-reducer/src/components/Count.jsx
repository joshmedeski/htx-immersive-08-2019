import React from "react";
import { connect } from "react-redux";

function Count({ countValue }) {
  return <h2>Count: {countValue}</h2>;
}

const mapStateToProps = state => ({
  countValue: state.counter
});

export default connect(mapStateToProps)(Count);
