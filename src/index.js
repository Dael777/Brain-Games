import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';
const brainEvenRules = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;
const startCorrectAnswers = 0;
const maxCorrectAnswers = 3;

const title = (gameName) => {
  console.log(welcome);
  switch (gameName) {
    case 'brainEven': console.log(brainEvenRules); break;
    default: break;
  }
};

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = number => (number % 2 === 0);

const startGame = (userName, correctAnswers) => {
  if (correctAnswers >= maxCorrectAnswers) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const question = generateNumber(minNumber, maxNumber);
  console.log(`Question: ${question}`);

  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer ');

  if (correctAnswer !== answer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Lets try again, ${userName}!`);
    return;
  }

  console.log('Correct!');
  startGame(userName, correctAnswers + 1);
};

const game = (gameName) => {
  title(gameName);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (!gameName) return;

  startGame(userName, startCorrectAnswers);
};

const brainGames = () => game();

const brainEven = () => game('brainEven');

export { brainGames, brainEven };
