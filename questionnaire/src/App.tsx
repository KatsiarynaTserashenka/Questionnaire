import React, { FC, useState } from 'react';
import './App.css';
import QuestionsContainer from './components/QuestionsContainer';
import Button from './components/Button';
import { data } from './constants/data';

const App: FC = () => {
  const [startTest, setStartTest] = useState(false);
  const [userName, setUserName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    setStartTest(true);
  };

  return (
    <div className="App-container">
      {startTest ? (
        <>
          <h2>The quiz is taken by: {userName}</h2>
          <QuestionsContainer />
        </>
      ) : (
        <form onSubmit={handleSubmit} className="App-container__form">
          <input
            id="inputEl"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            required
            className="App-container__form_input"
          />
          <Button text={data.nameStartButton} />
        </form>
      )}
    </div>
  );
};

export default App;
