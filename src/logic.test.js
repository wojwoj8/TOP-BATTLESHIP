const logic = require('./logic');
const main = require('./mainLoop');

const ship = logic.Ship(3);

describe('ship', () => {
  test('ship length', () => {
    expect(ship.sLength()).toBe(3);
  });

  test('ship hit table', () => {
    const tab = ship.showHitTable();
    // console.log(tab[1].hit);
    expect(tab).toEqual([{ hit: false }, { hit: false }, { hit: false }]);
  });

  test('ship hit', () => {
    const tab = ship.showHitTable();
    ship.gotHit(1);
    expect(tab).toEqual([{ hit: false }, { hit: true }, { hit: false }]);
  });

  test('ship sunk', () => {
    ship.gotHit(2);
    ship.gotHit(0);
    expect(ship.isSunk()).toBe(true);
  });
});

describe('gameboard', () => {
  test('gameboard size', () => {
    const board = logic.Gameboard();
    expect(board.table().length && board.table()[0].length).toBe(10);
  });

  test('place ship', () => {
    const board = logic.Gameboard();
    const statek1 = board.placeShip('statek1', 3, 1, 2);
    // console.log(board.getShipsData()[0].data.getLength());
    expect(board.getShipsData()[0].name).toContain('statek1');
    expect(board.getShipsData()[0].data.getLength()).toBe(3);
  });

  test('placed ship coordinates', () => {
    const board = logic.Gameboard();
    const statek = board.placeShip('statek1', 5, 2, 4);
    // console.log(board.table());
    expect(board.table()[2][4]).toEqual({ hit: false, name: 'statek1', index: 4 });
    expect(board.table()[3][4]).toEqual({ hit: false, name: 'statek1', index: 3 });
    expect(board.table()[4][4]).toEqual({ hit: false, name: 'statek1', index: 2 });
    expect(board.table()[5][4]).toEqual({ hit: false, name: 'statek1', index: 1 });
    expect(board.table()[6][4]).toEqual({ hit: false, name: 'statek1', index: 0 });
    expect(board.table()[7][4]).toEqual(0);
  });

  test('place ship beyond board', () => {
    const board = logic.Gameboard();
    // const statek = board.placeShip('statek1', 5, 8, 4);
    // const statek2 = board.placeShip('statek2', 5, 1, 10);
    expect(() => board.placeShip('statek2', 5, 1, 10)).toThrow('ship out of bounds');
    expect(() => board.placeShip('statek2', 5, 6, 5)).toThrow('ship out of bounds');
    // expect(board.getShipsData()[0]).toBeUndefined();
    // expect(board.getShipsData()[1]).toBeUndefined();
    // console.log(`statek2: ${statek2}`);
    // console.log(board.table());
  });

  test('placed ship attacked', () => {
    const board = logic.Gameboard();
    const statek = board.placeShip('statek1', 5, 2, 4);
    // console.log(board.table());
    expect(board.table()[2][4]).toEqual({ hit: false, name: 'statek1', index: 4 });
    board.receiveAttack(2, 4);
    // console.log(board.table()[2][4]);
    expect(board.table()[2][4]).toEqual({ hit: true, name: 'statek1', index: 4 });
    expect(board.table()[4][4]).toEqual({ hit: false, name: 'statek1', index: 2 });
  });

  test('placed ship sunk', () => {
    const board = logic.Gameboard();
    const statek = board.placeShip('statek1', 2, 1, 5);
    board.receiveAttack(1, 5);
    expect(board.getShipsData()[0].data.isSunk()).toEqual(false);
    board.receiveAttack(2, 5);
    expect(board.table()[1][5]).toEqual({ hit: true, name: 'statek1', index: 1 });
    expect(board.table()[2][5]).toEqual({ hit: true, name: 'statek1', index: 0 });
    // console.log(board.getShipsData()[0].data.isSunk());
    expect(board.getShipsData()[0].data.isSunk()).toEqual(true);
  });

  test('missed attack', () => {
    const board = logic.Gameboard();
    const statek = board.placeShip('statek1', 2, 1, 5);
    board.receiveAttack(1, 6);
    // console.log(board.table()[1][6]);
    expect(board.table()[1][6]).toEqual(2);
    expect(board.table()[1][7]).toEqual(0);
  });

  test('attack already hitted spot', () => {
    const board = logic.Gameboard();
    const statek = board.placeShip('statek1', 5, 2, 4);
    // console.log(board.table());
    expect(board.table()[2][4]).toEqual({ hit: false, name: 'statek1', index: 4 });
    board.receiveAttack(2, 4);
    // console.log(board.table()[2][4]);
    expect(board.table()[2][4]).toEqual({ hit: true, name: 'statek1', index: 4 });
    expect(board.table()[4][4]).toEqual({ hit: false, name: 'statek1', index: 2 });
    expect(board.receiveAttack(2, 4)).toBe(1);
  });
});

describe('player', () => {
  test('create player and get his name', () => {
    const player1 = logic.Player('admiralP', false);
    expect(player1.getName()).toEqual('admiralP', false);
  });
  test('ai player', () => {
    const player1 = logic.Player('admiralP', true);
    expect(player1.getName()).toEqual('admiralP', true);
  });
});

describe('mainLoop', () => {
  test('attacking each other', () => {
    const player1 = logic.Player('pl1', false);
    const player1Gameboard = logic.Gameboard();
    const AI = logic.Player('AI', true);
    const AIGameboard = logic.Gameboard();
    // const ship1 = ('ship1', 5, 2, 4);
    // const ship2 = ('AIship2', 5, 2, 2);
    // console.log(ship1);
    player1Gameboard.placeShip('ship1', 5, 2, 4);
    AIGameboard.placeShip('AIship2', 5, 2, 2);
    console.log(player1Gameboard.getShipsData());
    console.log(AIGameboard.getShipsData());
    player1.playTurn(AIGameboard, AI, 1, 3);
    // expect missed spot on enemy gameboard to be 2
    expect(AIGameboard.table()[1][3]).toBe(2);
    // expect that after player move his turn is changed to false
    expect(player1.checkTurn()).toEqual(false);
    // console.log(AI.isAi);
    AI.playTurn(player1Gameboard, player1, 1, 3);
    // console.log(player1Gameboard.table());
  });
  test('mainLoop function', () => {
    const game = main.mainLoop;
    expect(game.player1.getName()).toEqual('Player1');
    game.player1.playTurn(game.AIGameboard, game.AI, 1, 3);
    expect(game.player1.checkTurn()).toEqual(false);
    expect(game.AIGameboard.table()[1][3]).toBe(2);

    // console.log(game.AI);
  });
});
