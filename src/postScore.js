const Name = document.querySelector('.Name');
const Score = document.querySelector('.Score');
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
export default postScore;