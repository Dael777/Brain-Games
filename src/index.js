import readlineSync from 'readline-sync';

const TITLE = 'Welcome to the Brain Games!';
const BRAINEVEN_TITLE = 'Answer "yes" if number even otherwise answer "no".';
const MINNUMBER = 1;
const MAXNUMBER = 1000;
const START_CORRECT_ANSWERS = 0;
const MAX_CORRECT_ANSWERS = 3;
let userName = '';

const title = (gameName) => {
  console.log(TITLE);
  switch (gameName) {
    case 'brainEven': console.log(BRAINEVEN_TITLE); break;
    default: break;
  }
};

const hello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = number => (number % 2 === 0);

const startGame = (correctAnswers) => {
  if (correctAnswers >= MAX_CORRECT_ANSWERS) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }

  const question = generateNumber(MINNUMBER, MAXNUMBER);
  console.log(`Question: ${question}`);

  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer ');

  if (correctAnswer !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Lets try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');
  return startGame(correctAnswers + 1);
};

const game = (gameName) => {
  title(gameName);
  hello();

  if (!gameName) return false;

  return startGame(START_CORRECT_ANSWERS);
};

export default game;
