import { Ship, Gameboard, Player } from './logic';

const mainLoop = (() => {
  // create players
  const player1 = Player('Player1', false);
  const AI = Player('AI', true);

  // create gameboards
  const player1Gameboard = Gameboard();
  const AIGameboard = Gameboard();

  // create ships
  player1Gameboard.placeRandom('ship5', 5);
  player1Gameboard.placeRandom('ship4', 4);
  player1Gameboard.placeRandom('ship32', 3);
  player1Gameboard.placeRandom('ship31', 3);
  player1Gameboard.placeRandom('ship2', 2);

  AIGameboard.placeRandom('AIship5', 5);
  AIGameboard.placeRandom('AIship4', 4);
  AIGameboard.placeRandom('AIship32', 3);
  AIGameboard.placeRandom('AIship31', 3);
  AIGameboard.placeRandom('AIship2', 2);

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

  console.log(player1Gameboard.getShipsData());
  console.log(player1Gameboard.table());

  return {
    player1, AI, player1Gameboard, AIGameboard, markShipsOnGameBoard,
  };
})();

export { mainLoop };
