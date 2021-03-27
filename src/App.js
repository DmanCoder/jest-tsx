import React from 'react';

// Components
import Congrats from './components/congrats/congrats';
import GuessedWords from './components/guessWords/guessedWords';
import Input from './components/input/input';

const App = () => {
  return (
    <div data-test="app-component" className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: 'Train',
            letterMatchCount: 3,
          },
        ]}
      />

      <Input secreteWord="" />
    </div>
  );
};

export default App;
