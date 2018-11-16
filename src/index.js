import readlineSync from 'readline-sync';

const userName = question => readlineSync.question(question);

export default userName;