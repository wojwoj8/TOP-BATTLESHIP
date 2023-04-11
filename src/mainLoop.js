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
  player1Gameboard.placeShip('ship2', 3, 6, 6);
  AIGameboard.placeShip('AIship1', 2, 4, 4);
  AIGameboard.placeShip('AIship2', 5, 2, 2);

  function markShipsOnGameBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
      // console.log(player1Gameboard.table()[i][j]);
        if (typeof (player1Gameboard.table()[i][j]) === 'object') {
          // console.log('test');
          const elements = document.querySelectorAll(`[data-x="${i}"][data-y="${j}"]`);
          const el = elements[0];
          // console.log(el);
          el.style.backgroundColor = 'green';
        // const playerGameboardDisplay = document.querySelector('.main-content-left');
        // const cell = playerGameboardDisplay.querySelector(`[data-x="${i}]"[data-y="${j}"]`);
        // cell.style.background = 'green';
        }
      }
    }
  }

  // console.log(player1Gameboard.getShipsData());

  return {
    player1, AI, player1Gameboard, AIGameboard, markShipsOnGameBoard,
  };
})();

export { mainLoop };
