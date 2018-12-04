import game from '..';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;
const operations = ['+', '-', '*'];

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomOperation = () => operations[Math.floor(Math.random() * operations.length)];

const question = () => {
  const num1 = generateNumber(minNumber, maxNumber);
  const num2 = generateNumber(minNumber, maxNumber);
  const operation = randomOperation();
  return `${num1} ${operation} ${num2}`;
};

const correctAnswer = (generatedQuestion) => {
  const splitted = generatedQuestion.split(' ');

  let result = 0;

  switch (splitted[1]) {
    case '+': result = +splitted[0] + +splitted[2]; break;
    case '-': result = +splitted[0] - +splitted[2]; break;
    case '*': result = +splitted[0] * +splitted[2]; break;
    default: break;
  }

  return String(result);
};

const brainCalc = () => game(description, question, correctAnswer);

export default brainCalc;
