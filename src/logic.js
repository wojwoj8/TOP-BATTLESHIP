const Ship = (length) => {
  const sLength = () => length;
  let sunk = false;

  const hitTable = [];
  const isSunk = () => sunk;
  const showHitTable = () => hitTable;
  const hitFields = () => {
    for (let i = 0; i < length; i++) {
      hitTable.push({ hit: false });
    }
  };
  const gotHit = (index) => {
    hitTable[index].hit = true;
    if (hitTable.every((field) => field.hit === true)) {
      sunk = true;
    }
  };
  hitFields();

  return {
    sLength, gotHit, isSunk, showHitTable,
  };
};

const Gameboard = () => {
  const coordinatesTab = Array(10).fill().map(() => Array(10).fill(0));
  const status = () => coordinatesTab;

  const placeShip = (length, x, y) => {
    const ship = Ship(length, 0, false);

    // place on gameboard coordinates and where ship coordinates = 1
    for (let i = length; i > 0; i--) {
      coordinatesTab[x][y] = 1;
      x++;
    }
  };
  const receiveAttack = (x, y) => {
    let tab = coordinatesTab[x][y];
    if (tab === 0) {
      tab = 2;
    } else if (tab === 1) {
      // s
    }
  };

  return { status, placeShip };
};

export { Ship, Gameboard };
