import { cons } from 'hexlet-pairs';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const quiz = () => {
  const question = generateNumber(minNumber, maxNumber);

  const isEven = number => (number % 2 === 0);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const brainEven = () => game(description, quiz);

export default brainEven;
