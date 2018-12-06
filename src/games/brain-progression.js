import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import game from '..';

const description = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 100;




const quiz = () => {
  const num1 = generateNumber(minNumber, maxNumber);
  const num2 = generateNumber(minNumber, maxNumber);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(greatestDivisor(num1, num2));

  return cons(question, correctAnswer);
};

export default () => game(description, quiz);
