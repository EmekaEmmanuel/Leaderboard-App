const getUsersScores = async (iD) => {
  const getScoresURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${iD}/scores/`;

  try {
    const getGame = await fetch(getScoresURL);
    const result = await getGame.json();
    const data = result;
    return data;
  } catch (error) {
    return error;
  }
};

export default getUsersScores;