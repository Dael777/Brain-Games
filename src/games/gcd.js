import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import game from '..';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;
const minPossibleDivisor = 1;

const greatestDivisor = (num1, num2) => {
  const greaterNumber = Math.max(num1, num2);
  const smallerNumber = Math.min(num1, num2);

  if (greaterNumber % smallerNumber === 0) return smallerNumber;

  const maxPossibleDivisor = Math.floor(smallerNumber / 2);

  const iter = (n1, n2, divisor) => {
    if (divisor <= minPossibleDivisor) { return divisor; }
    return ((n1 % divisor === 0) && (n2 % divisor === 0)) ? divisor : iter(n1, n2, divisor - 1);
  };

  return iter(greaterNumber, smallerNumber, maxPossibleDivisor);
};

const makeQuiz = () => {
  const num1 = generateNumber(minNumber, maxNumber);
  const num2 = generateNumber(minNumber, maxNumber);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(greatestDivisor(num1, num2));

  return cons(question, correctAnswer);
};

export default () => game(description, makeQuiz);
