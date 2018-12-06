import { cons } from 'hexlet-pairs';
import { generateNumber, randomArrayValue } from '../utils';
import game from '..';

const description = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 10;
const maxProgressionLength = 10;

const makeProgression = () => {
  const firstNumber = generateNumber(minNumber, maxNumber);
  const progressionStep = generateNumber(minNumber, maxNumber);
  const progression = [firstNumber];

  let i = 1;
  while (i < maxProgressionLength) {
    progression.push(firstNumber + progressionStep * i);
    i += 1;
  }

  return progression;
};

const quiz = () => {
  const question = makeProgression();
  const correctAnswer = randomArrayValue(question);

  const hiddenValueIndex = question.indexOf(correctAnswer);
  question[hiddenValueIndex] = '..';

  return cons(question, String(correctAnswer));
};

export default () => game(description, quiz);
