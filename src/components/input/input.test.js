import React from 'react';
import { shallow } from 'enzyme';

// Utilities
import allUTL from '../../utils/allUTL';

const { findByTestAttribute, checkProps } = allUTL.testingUTL;

// Component
import Input from './input';

const defaultProps = {
  secreteWord: 'Train',
};

/**
 * @function setUp
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}) => {
  const propSetup = { ...defaultProps, ...props };
  const component = shallow(<Input {...propSetup} />);
  return component;
};

describe('<Input />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp();
  });

  it('Should render without errors', () => {
    const inputComponent = findByTestAttribute(wrapper, 'input-component');
    expect(inputComponent.length).toBe(1);
  });

  it('Should not throw warning with expected props', () => {
    const propsError = checkProps(Input, defaultProps);
    expect(propsError).toBeUndefined();
  });
});

describe('State controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    wrapper = setUp();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  it('should update state value of input box upon change', () => {
    const inputBox = findByTestAttribute(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  it('Field is cleared upon submit button click', () => {
    const submitButton = findByTestAttribute(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
