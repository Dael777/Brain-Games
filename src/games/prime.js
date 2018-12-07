import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import game from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const isPrime = (number) => {
  const minPossibleDivisor = 2;
  if (number < minPossibleDivisor) return false;
  if (number === minPossibleDivisor) return true;

  const iter = (divisor) => {
    if (divisor >= number / 2) return true;
    if (number % divisor === 0) return false;

    return iter(divisor + 1);
  };

  return iter(minPossibleDivisor);
};

const makeQuiz = () => {
  const question = generateNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => game(description, makeQuiz);
