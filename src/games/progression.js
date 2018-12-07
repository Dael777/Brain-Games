import { cons } from 'hexlet-pairs';
import { generateNumber, randomArrayValue } from '../utils';
import game from '..';

const description = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 10;

const makeProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + progressionStep * i);
  }

  return progression;
};

const quiz = () => {
  const firstNumber = generateNumber(minNumber, maxNumber);
  const progressionStep = generateNumber(minNumber, maxNumber);
  const progressionLength = 10;

  const question = makeProgression(firstNumber, progressionStep, progressionLength);
  const correctAnswer = randomArrayValue(question);

  const hiddenValueIndex = question.indexOf(correctAnswer);
  question[hiddenValueIndex] = '..';

  return cons(question, String(correctAnswer));
};

export default () => game(description, quiz);
