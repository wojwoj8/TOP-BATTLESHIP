const logic = require('./logic');

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
    // expect(board.getShipsData()[0].data.isSunk()).toEqual(true);
  });
  test('missed attack', () => {
    const board = logic.Gameboard();
    const statek = board.placeShip('statek1', 2, 1, 5);
    board.receiveAttack(1, 6);
    // console.log(board.table()[1][6]);
    expect(board.table()[1][6]).toEqual(2);
    expect(board.table()[1][7]).toEqual(0);
  });
});
