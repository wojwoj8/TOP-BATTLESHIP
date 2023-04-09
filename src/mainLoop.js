import { Ship, Gameboard, Player } from './logic';

const mainLoop = (() => {
  const player1 = Player('Player1', false);
  const AI = Player('AI', true);

  const player1Gameboard = Gameboard();
  const AIGameboard = Gameboard();

  const ship1 = Ship(5, 2, 4);
  const ship2 = Ship(5, 2, 2);

  player1Gameboard.placeShip('ship1', 5, 2, 4);
  AIGameboard.placeShip('AIship2', 5, 2, 2);

  return {
    player1, AI, player1Gameboard, AIGameboard,
  };
})();

export { mainLoop };
