import createGame from './createGame.js';

const getGameId = async () => {
  await createGame('Emeka game');
};

const iD = 'SCm1ijpZPhCl2ORjDMVH';

export { getGameId, iD };