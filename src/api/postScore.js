const postScore = async (name, score, iD) => {
  const postScoreURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${iD}/scores/`;

  const config = {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const getGame = await fetch(postScoreURL, config);
    const result = await getGame.json();
    const data = result;
    return data;
  } catch (error) {
    return error;
  }
};

export default postScore;