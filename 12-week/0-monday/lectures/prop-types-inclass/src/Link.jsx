import React from "react";
import PropTypes from "prop-types";

export default class Link extends React.Component {
  state = {
    text: this.props.text
  };

  render() {
    return (
      <a
        className="App-link"
        href={this.props.href}
        target={this.props.isBlank ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        {this.state.text}
      </a>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  isBlank: PropTypes.bool
};

Link.defaultProps = {
  text: "Click here",
  isBlank: false
};
