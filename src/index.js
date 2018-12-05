import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcome = 'Welcome to the Brain Games!';
const startCorrectAnswers = 0;
const maxCorrectAnswers = 3;

const startGame = (userName, quiz, correctAnswers) => {
  if (correctAnswers >= maxCorrectAnswers) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const generatedQuiz = quiz();
  console.log(`Question: ${car(generatedQuiz)}`);

  const answer = readlineSync.question('Your answer ');

  if (cdr(generatedQuiz) !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(generatedQuiz)}`);
    console.log(`Lets try again, ${userName}!`);
    return;
  }

  console.log('Correct!');
  startGame(userName, quiz, correctAnswers + 1);
};

const game = (description, quiz) => {
  console.log(welcome);
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  startGame(userName, quiz, startCorrectAnswers);
};

export default game;
