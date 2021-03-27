import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import allUTL from './utils/allUTL';

const { findByTestAttribute } = allUTL.testingUTL;

const setup = (state = {}) => {
  // TODO: apply state

  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttribute(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  // Simulate click on submit button
  const submitButton = findByTestAttribute(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
};

describe('No words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'Party',
      success: false,
      guessedWords: [],
    });
  });

  it('Creates GuessWords table with one row', () => {
    const GuessedWordsRows = findByTestAttribute(wrapper, 'guessed-word');
    expect(GuessedWordsRows).toHaveLength(1);
  });
});

describe('Some words guessed', () => {});

describe('Guess secret word', () => {});
