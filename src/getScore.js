const scoresDiv = document.querySelector('.scoresDiv');
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
  export default getScores;