import React from 'react';
import { shallow } from 'enzyme';

// Component
import GuessedWords from './guessedWords';

// Utilities
import allUTL from '../../utils/allUTL';

const { findByTestAttribute, checkProps } = allUTL.testingUTL;

const defaultProps = {
  guessedWords: [{ guessedWord: 'Train', letterMatchCount: 3 }],
};

/*
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setUp
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const component = shallow(<GuessedWords {...setupProps} />);
  return component;
};

describe('<GuessedWords />', () => {
  it('Should render without errors', () => {
    const wrapper = setUp();
    const guessedWordsComponent = findByTestAttribute(
      wrapper,
      'guessed-words-component'
    );
    expect(guessedWordsComponent.length).toBe(1);
  });

  it('Should not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });
});

describe('If there are no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });

  it('Should render instructions to guess a word', () => {
    const instructions = findByTestAttribute(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});
describe('If there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: 'Train',
      letterMatchCount: 3,
    },
    {
      guessedWord: 'Agile',
      letterMatchCount: 1,
    },
    {
      guessedWord: 'Party',
      letterMatchCount: 5,
    },
  ];

  beforeEach(() => {
    wrapper = setUp({ guessedWords });
  });

  it('Should render without errors', () => {
    const guessedWordsComponent = findByTestAttribute(
      wrapper,
      'guessed-words-component'
    );
    expect(guessedWordsComponent.length).toBe(1);
  });

  it('Should render "Guessed words" section ', () => {
    const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  it('Should display the correct numbers guessed words', () => {
    const guessedWordsNodes = findByTestAttribute(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
