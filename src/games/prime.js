import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import game from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const isPrime = (number) => {
  const minPossibleDivisor = 2;
  if (number === minPossibleDivisor) return true;

  const iter = (num, divisor) => {
    if (num < minPossibleDivisor || num % divisor === 0) return false;
    if (divisor >= num / 2) return true;

    return iter(num, divisor + 1);
  };

  return iter(number, minPossibleDivisor);
};

const makeQuiz = () => {
  const question = generateNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => game(description, makeQuiz);
