import React, { FC, useState } from 'react';
import './App.css';
import QuestionsContainer from './components/QuestionsContainer';
import Button from './components/Button';
import { data } from './constants/data';

const App: FC = () => {
  const [startTest, setStartTest] = useState(false);
  const [userName, setUserName] = useState('');
  const inputEl = document.getElementById('inputEl');
  console.log(inputEl);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    setStartTest(true);
  };

  return (
    <div className="App">
      {startTest ? (
        <>
          <h2>Опрос проходит: {userName}</h2>
          <QuestionsContainer />
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            id="inputEl"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
          <Button text={data.nameStartButton} />
        </form>
      )}
    </div>
  );
};

export default App;
