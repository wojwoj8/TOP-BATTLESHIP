const logic = require('./logic');

const board = logic.Gameboard();

const ship = logic.Ship(3, 0, false);
test('ship length', () => {
  expect(ship.sLength()).toBe(3);
});

test('ship hit', () => {
  ship.gotHit();
  expect(ship.sHits()).toBe(1);
});

test('ship sunk', () => {
  ship.gotHit();
  ship.gotHit();
  console.log(ship.sHits());
  expect(ship.sSunk()).toBe(true);
});

test('gameboard ship placement', () => {
  board.placeShip(3, 4, 5);
  const brd = board.status();
  console.log(brd[0][0]);
  const coordinate = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (brd[i][j] === 1) {
        coordinate.push(`[${i}][${j}]`);
      }
    }
  }
  expect(coordinate).toBe(['[4][5]', '[5][5]', '[6][5]']);
});
