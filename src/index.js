import './index.css';
import { addScore, addToLocalStorage, renderData } from './Functions.js';

const submit = document.querySelector('.submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  renderData();
  addToLocalStorage();
});

document.onload = renderData();