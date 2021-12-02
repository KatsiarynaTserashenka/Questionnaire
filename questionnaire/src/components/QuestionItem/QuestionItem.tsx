import React, { FC, useState } from 'react';
import { data } from '../../constants/data';
import Button from '../Button';
import ShowResult from '../ShowResults';

const QuestionItem: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfTest, setEndOfTest] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [choosenAnswer, setChoosenAnswer] = useState(['']);
  const answers = data.questions[currentQuestion].answers;
  const resultsStr = localStorage.getItem('results');
  if (!resultsStr) {
    localStorage.setItem('results', JSON.stringify({}));
  }

  const setToLocalStorage = () => {
    const resultsStr = localStorage.getItem('results');
    const results = resultsStr && JSON.parse(resultsStr);
    results[data.questions[currentQuestion].quest] = choosenAnswer;
    localStorage.setItem('results', JSON.stringify(results));
  };

  const showNextQuestion = () => {
    setToLocalStorage();
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion === data.questions.length - 1) {
      setEndOfTest(true);
    }
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    setChoosenAnswer(value);
  };

  const showResults = () => {
    setToLocalStorage();
    setShowResult(true);
  };

  return (
    <div className="questionsItem">
      {!showResult ? (
        <>
          <h3>{data.questions[currentQuestion].quest}</h3>
          <div>
            {answers ? (
              answers.map((answer) => (
                <div key={String(answer.id)}>
                  <input
                    id={String(answer.id)}
                    type={data.questions[currentQuestion].answerType}
                    name={data.questions[currentQuestion].quest}
                    value={answer.answer}
                    onChange={handleChange}
                  />
                  <label htmlFor={String(answer.id)}>{answer.answer}</label>
                </div>
              ))
            ) : (
              <input
                type={data.questions[currentQuestion].answerType}
                onChange={handleChange}
              />
            )}

            {endOfTest ? (
              <Button text={data.nameFinishButton} onClick={showResults} />
            ) : (
              <Button text={data.nameNextButton} onClick={showNextQuestion} />
            )}
          </div>
        </>
      ) : (
        <ShowResult />
      )}
    </div>
  );
};

export default QuestionItem;
