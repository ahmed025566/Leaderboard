const Name = document.querySelector('.Name');
const score = document.querySelector('.Score');
const scoresDiv = document.querySelector('.scores');
let scores = [];

if (localStorage.getItem('scores')) {
  scores = JSON.parse(localStorage.getItem('scores'));
}

let counter = 1;
export const addScore = () => {
  if (score.value !== '' && Name.value !== '') {
    const player = {
      Name: Name.value,
      scor: score.value,
      id: Date.now(),
      counter,
    };
    scores.push(player);
    score.value = '';
    Name.value = '';
    counter += 1;
  }
};
export const renderData = () => {
  scoresDiv.innerHTML = '';
  scores.forEach((score) => {
    const gamer = document.createElement('div');
    gamer.className = 'gamer';
    if (score.counter % 2 === 0) {
      gamer.classList.add('gray');
    }
    gamer.append(document.createTextNode(`${score.Name} : ${score.scor}`));
    scoresDiv.append(gamer);
  });
};
export const addToLocalStorage = () => {
  localStorage.setItem('scores', JSON.stringify(scores));
};