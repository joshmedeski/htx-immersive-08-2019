import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  render() {
    return (
      <a
        className="App-link"
        href={this.props.href}
        target={this.props.isBlank ? "_blank" : "_self"}
      >
        {this.props.text}
      </a>
    );
  }
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  isBlank: PropTypes.bool
};

Button.defaultProps = {
  text: "Click",
  isBlank: true
};
