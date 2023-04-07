import { Ship, Gameboard, Player } from './logic';

const mainLoop = (() => {
  const player1 = Player('pl1', false);
  const player1Gameboard = Gameboard();
  const AI = Player('AI', true);
  const AIGameboard = Gameboard();
  const ship1 = Ship(5, 2, 4);
  const ship2 = Ship(5, 2, 2);

  player1Gameboard.placeShip(ship1);
  AIGameboard.placeShip(ship2);
})();

export { mainLoop };
