const Ship = (length, hits, sunk) => {
  const sLength = () => length;
  const sHits = () => hits;
  const sSunk = () => sunk;
  const isSunk = () => sunk = true;
  const gotHit = () => {
    hits += 1;
    if (hits === length) {
      isSunk();
    }
    return hits;
  };
  const status = () => {
    console.log(`Length: ${length}, hits: ${hits}, sunk: ${sunk}`);
  };

  return {
    sLength, sHits, sSunk, gotHit, isSunk, status,
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
