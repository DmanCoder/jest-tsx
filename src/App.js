import React from 'react';

// Components
import Congrats from './components/congrats/congrats';
import GuessedWords from './components/guessWords/guessedWords';

const App = () => {
  return (
    <div data-test="app-component" className="">
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
    </div>
  );
};

export default App;
