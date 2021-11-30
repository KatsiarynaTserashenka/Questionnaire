import React, { FC, useState } from 'react';
import { data } from '../../constants/data';
import Button from '../Button';

const QuestionItem: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endOfTest, setEndOfTest] = useState(false);
  const answers = data.questions[currentQuestion].answers;

  const showNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.questions.length - 1) {
      setCurrentQuestion(nextQuestion);
    } else {
      setEndOfTest(true);
    }
  };

  return (
    <div className="questionsItem">
      {endOfTest ? (
        <Button text={data.nameFinishButton} />
      ) : (
        <>
          <h2>{data.questions[currentQuestion].quest}</h2>
          {answers &&
            answers.map((answer) => (
              <div>
                <input type={data.questions[currentQuestion].answerType} />
                <span>{answer.answer}</span>
              </div>
            ))}
          <Button text={data.nameNextButton} onClick={showNextQuestion} />
        </>
      )}
    </div>
  );
};

export default QuestionItem;
