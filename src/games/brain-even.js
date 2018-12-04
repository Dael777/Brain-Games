import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const question = () => generateNumber(minNumber, maxNumber);

const correctAnswer = (generatedQuestion) => {
  const isEven = number => (number % 2 === 0);
  return isEven(generatedQuestion) ? 'yes' : 'no';
};

const brainEven = () => game(description, question, correctAnswer);

export default brainEven;
