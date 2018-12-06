import { cons } from 'hexlet-pairs';
import { generateNumber, randomArrayValue } from '../utils';
import game from '..';

const description = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 10;
const maxProgressionLength = 10;

const makeProgression = (firstNumber, progressionStep) => {
  const progression = [];

  for (let i = 0; i < maxProgressionLength; i += 1) {
    progression.push(firstNumber + progressionStep * i);
  }

  return progression;
};

const quiz = () => {
  const firstNumber = generateNumber(minNumber, maxNumber);
  const progressionStep = generateNumber(minNumber, maxNumber);

  const question = makeProgression(firstNumber, progressionStep);
  const correctAnswer = randomArrayValue(question);

  const hiddenValueIndex = question.indexOf(correctAnswer);
  question[hiddenValueIndex] = '..';

  return cons(question, String(correctAnswer));
};

export default () => game(description, quiz);
