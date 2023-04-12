import { Ship, Gameboard, Player } from './logic';

const mainLoop = (() => {
  // create players
  const initShipsAI = (name) => {
    name.placeRandom('AIship5', 5);
    name.placeRandom('AIship4', 4);
    name.placeRandom('AIship32', 3);
    name.placeRandom('AIship31', 3);
    name.placeRandom('AIship2', 2);
  };

  const initShipsPl = (name) => {
    name.placeRandom('ship5', 5);
    name.placeRandom('ship4', 4);
    name.placeRandom('ship32', 3);
    name.placeRandom('ship31', 3);
    name.placeRandom('ship2', 2);
  };
  const initGame = () => {
    const player1 = Player('Player1', false);
    const AI = Player('AI', true);

    // create gameboards
    const player1Gameboard = Gameboard();
    const AIGameboard = Gameboard();

    // create ships
    initShipsAI(AIGameboard);
    initShipsPl(player1Gameboard);
    // console.log(player1Gameboard.getShipsData());
    // console.log(player1Gameboard.table());

    return {
      player1, AI, player1Gameboard, AIGameboard,
    };
  };
  const gameData = initGame();
  const resetGame = () => {
    gameData.player1Gameboard.reset();
    gameData.AIGameboard.reset();
    initShipsPl(gameData.player1Gameboard);
    initShipsAI(gameData.AIGameboard);
  };
  return {
    player1: gameData.player1,
    AI: gameData.AI,
    player1Gameboard: gameData.player1Gameboard,
    AIGameboard: gameData.AIGameboard,
    resetGame,
  };
})();

export { mainLoop };
