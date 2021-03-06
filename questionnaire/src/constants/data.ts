export const data = {
  nameStartButton: 'Start',
  nameNextButton: 'Next',
  nameFinishButton: 'Show results',
  questions: [
    {
      id: 1,
      quest: 'How old are you?',
      answerType: 'radio',
      answers: [
        {
          id: 5432,
          answer: '< 18',
        },
        {
          id: 3428,
          answer: '> 18 and < 25',
        },
        {
          id: 6754,
          answer: '> 25 and < 43',
        },
        {
          id: 1953,
          answer: '> 43',
        },
      ],
    },
    {
      id: 2,
      quest: 'What color are the eyes?',
      answerType: 'radio',
      answers: [
        {
          id: 7863,
          answer: 'Blue',
        },
        {
          id: 5643,
          answer: 'Green',
        },
        {
          id: 6754,
          answer: 'Hazel',
        },
        {
          id: 8789,
          answer: 'Red',
        },
      ],
    },
    {
      id: 3,
      quest: 'Your education?',
      answerType: 'checkbox',
      answers: [
        {
          id: 7863,
          answer: 'Specialized secondary education',
        },
        {
          id: 5643,
          answer: 'Higher education',
        },
        {
          id: 6754,
          answer: 'General education',
        },
      ],
    },
    {
      id: 4,
      quest: 'Your city of residence?',
      answerType: 'text',
    },
  ],
};
