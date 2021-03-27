import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secreteWord }) => {
  return <div data-test="input-component" className=""></div>;
};

Input.propTypes = {
  secreteWord: PropTypes.string.isRequired,
};
export default Input;
