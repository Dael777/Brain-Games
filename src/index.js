import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcome = 'Welcome to the Brain Games!';
const startCorrectAnswers = 0;
const maxCorrectAnswers = 3;

const startGame = (makeQuiz, correctAnswers) => {
  if (correctAnswers >= maxCorrectAnswers) { return true; }

  const quiz = makeQuiz();
  const question = car(quiz);
  const correctAnswer = cdr(quiz);

  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer ');

  if (correctAnswer !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    return false;
  }

  console.log('Correct!');
  return startGame(makeQuiz, correctAnswers + 1);
};

const game = (description, makeQuiz) => {
  console.log(welcome);
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameResult = startGame(makeQuiz, startCorrectAnswers);

  if (gameResult) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Lets try again, ${userName}!`);
  }
};

export default game;
