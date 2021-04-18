import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="btn"
      style={{ backgroundColor: props.color }}
    >
      {props.btnText}
    </button>
  );
};
Button.defaultProps = {
  title: 'Title',
  btnText: 'click me',
  color: 'red',
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
