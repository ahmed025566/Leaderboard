import './index.css';

const referesh = document.querySelector('.referesh');
const Name = document.querySelector('.Name');
const Score = document.querySelector('.Score');
const scoresDiv = document.querySelector('.scoresDiv');
const Submit = document.querySelector('.submit');

const getScores = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTV4S5fjz/scores/',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  )
    .then((response) => response.text())
    .then((response) => {
      scoresDiv.innerHTML = '';

      const results = JSON.parse(response);
      let i = 1;
      results.result.forEach((result) => {
        const game = document.createElement('div');
        game.className = 'gamer';
        if (i % 2 === 0) {
          game.classList.add('gray');
        }
        const Inner = document.createElement('p');
        Inner.append(
          document.createTextNode(`${result.user}: ${result.score}`),
        );
        game.append(Inner);
        scoresDiv.append(game);
        i += 1;
      });
    });
};

const postScore = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTV4S5fjz/scores/',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: Name.value,
        score: +Score.value,
      }),
    },
  ).then((response) => response.json());
  Name.value = '';
  Score.value = '';
};

referesh.addEventListener('click', () => getScores());
Submit.addEventListener('click', (e) => {
  e.preventDefault();
  postScore();
});
