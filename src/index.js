import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';
const startCorrectAnswers = 0;
const maxCorrectAnswers = 3;

const round = (userName, question, correctAnswer, correctAnswers) => {
  if (correctAnswers >= maxCorrectAnswers) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const generatedQuestion = question();
  console.log(`Question: ${generatedQuestion}`);

  const checkAnswer = correctAnswer(generatedQuestion);
  const answer = readlineSync.question('Your answer ');

  if (checkAnswer !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${checkAnswer}`);
    console.log(`Lets try again, ${userName}!`);
    return;
  }

  console.log('Correct!');
  round(userName, question, correctAnswer, correctAnswers + 1);
};

const game = (description, question, correctAnswer) => {
  console.log(welcome);
  if (description) { console.log(description); }

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (!question) { return; }

  round(userName, question, correctAnswer, startCorrectAnswers);
};

export default game;
