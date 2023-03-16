import './index.css';
import getScores from './getScore.js';
import postScore from './postScore.js';

const referesh = document.querySelector('.referesh');
const Submit = document.querySelector('.submit');

referesh.addEventListener('click', () => getScores());
Submit.addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});
