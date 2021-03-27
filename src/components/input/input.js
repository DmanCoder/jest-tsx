import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secreteWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="input-component" className="">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />

        <button data-test="submit-bottom" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secreteWord: PropTypes.string.isRequired,
};
export default Input;
