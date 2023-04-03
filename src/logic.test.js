const logic = require('./logic');

const board = logic.Gameboard();

const ship = logic.Ship(3);

describe('ship', () => {
  test('ship length', () => {
    expect(ship.sLength()).toBe(3);
  });

  test('ship hit table', () => {
    const tab = ship.showHitTable();
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
    expect(board.status().length && board.status()[0].length).toBe(10);
  });
});
