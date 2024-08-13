import React, { Component } from "react";
import PropTypes from "prop-types";
export class BoilingVerdict extends Component {
  render() {
    return (
      <>
        {this.props.celsius >= 100 ? (
          <div>The water would boil</div>
        ) : (
          <div>The water would not boil</div>
        )}
      </>
    );
  }
}
BoilingVerdict.propTypes = {
  celsius: PropTypes.number,
};
export default BoilingVerdict;
