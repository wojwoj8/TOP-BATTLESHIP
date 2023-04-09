import { Ship, Gameboard, Player } from './logic';

const mainLoop = (() => {
  // create players
  const player1 = Player('Player1', false);
  const AI = Player('AI', true);

  // create gameboards
  const player1Gameboard = Gameboard();
  const AIGameboard = Gameboard();

  // create ships
  player1Gameboard.placeShip('ship1', 5, 2, 4);
  AIGameboard.placeShip('AIship2', 5, 2, 2);

  return {
    player1, AI, player1Gameboard, AIGameboard,
  };
})();

export { mainLoop };
