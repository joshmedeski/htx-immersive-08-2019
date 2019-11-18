import React from "react";
import { connect } from "react-redux";

const Count = ({ count }) => {
  return <h2>Clicked: {count} times</h2>;
};

const mapStateToProps = state => {
  return { count: state };
};

export default connect(mapStateToProps)(Count);
