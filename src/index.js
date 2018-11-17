import readlineSync from 'readline-sync';

const TITLE = 'Welcome to the Brain Games!';
const BRAINEVEN_TITLE = 'Answer "yes" if number even otherwise answer "no".';
const MINNUMBER = 1;
const MAXNUMBER = 1000;
let userName = '';

const hello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return false;
};

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = number => (number % 2 === 0);

const brainEven = (correctAnswers) => {
  if (correctAnswers >= 3) {
    console.log(`Congratulations, ${userName}!`);
    return false;
  }

  const randomNumber = generateNumber(MINNUMBER, MAXNUMBER);
  console.log(randomNumber);

  const answer = readlineSync.question('Your answer ');

  if ((isEven(randomNumber) && answer === 'yes') || (!isEven(randomNumber) && answer === 'no')) {
    console.log('Correct!');
    return brainEven(correctAnswers + 1);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${(isEven(randomNumber)) ? 'yes' : 'no'}`);
  console.log(`Lets try again, ${userName}!`);
  return false;
};

export {
  TITLE, BRAINEVEN_TITLE, hello, brainEven,
};
