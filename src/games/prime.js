import { cons } from 'hexlet-pairs';
import { generateNumber } from '../utils';
import game from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 1000;

const isPrime = (number) => {
  const minPossibleDivisor = 1;
  if (number <= minPossibleDivisor) return false;
  const maxPossibleDivisor = Math.ceil(number / 2);

  const iter = (divisor) => {
    if (divisor === minPossibleDivisor) return true;
    if (number % divisor === 0) return false;

    return iter(divisor - 1);
  };

  return iter(maxPossibleDivisor);
};

const makeQuiz = () => {
  const question = generateNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => game(description, makeQuiz);
