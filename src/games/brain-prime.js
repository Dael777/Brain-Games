import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import game from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;
const minPossibleDivisor = 2;

const isPrime = (num, divisor) => {
  if (divisor >= num / 2) return true;
  if (num % divisor === 0) return false;

  return isPrime(num, divisor + 1);
};

const makeQuiz = () => {
  const question = generateNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question, minPossibleDivisor) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => game(description, makeQuiz);
