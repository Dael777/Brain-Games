import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const isEven = number => (number % 2 === 0);

const makeQuiz = () => {
  const question = generateNumber(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => game(description, makeQuiz);
