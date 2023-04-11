const Ship = (length) => {
  const sLength = () => length;
  let sunk = false;
  const getLength = () => length;
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
      // console.log('ship is sunk');
    }
  };
  hitFields();

  return {
    sLength, gotHit, isSunk, showHitTable, getLength,
  };
};

const Gameboard = () => {
  const coordinatesTab = Array(10).fill().map(() => Array(10).fill(0));
  const table = () => coordinatesTab;
  const shipsData = [];
  const getShipsData = () => shipsData;

  const placeShipValidation = (length, x, y) => {
    const calculatedXLen = x + length;
    const calculatedYLen = y + length;
    if (calculatedXLen > 10 || calculatedYLen > 10) {
      throw new Error('ship out of bounds');
    }
  };
  // add functon that check if ship fits on board
  const placeShip = (name, length, x, y) => {
    placeShipValidation(length, x, y);

    const ship = Ship(length);
    // console.log('created ship');
    // place on gameboard coordinates ship name and ship field property (hit:true/false)
    for (let i = length - 1; i >= 0; i--) {
      // console.log(ship.showHitTable()[i].hit);
      coordinatesTab[x][y] = {
        name,
        hit: ship.showHitTable()[i].hit,
        index: i,
      };
      x++;
    }
    shipsData.push({
      name,
      data: ship,

    });
  };
  const receiveAttack = (x, y) => {
    // if legal attack return 0, else return 1
    const tab = table()[x][y];
    // if missed
    if (tab === 0) {
      table()[x][y] = 2;
      return 0;
    } if (typeof tab === 'object') {
      const shipName = tab.name;

      // if there is more than 1 ships it finds under which index hides our attacked ship

      const index = shipsData.findIndex((element) => element.name === shipName);
      const shipAttackedFieldIndex = tab.index;

      if (tab.hit === true) {
        // onsole.log('true');
        return 1;
      }

      // change hit to true in shipsData
      getShipsData()[index].data.gotHit(shipAttackedFieldIndex);

      // change hit to true in coordinates
      tab.hit = getShipsData()[index].data.showHitTable()[shipAttackedFieldIndex].hit;
      return 0;
    }
  };

  return {
    table, placeShip, getShipsData, receiveAttack,
  };
};

const Player = (name, ai) => {
  const getName = () => name;
  let playerTurn = true;
  const checkTurn = () => playerTurn;

  const isAi = ai;

  const playTurn = (enemyGameboard, enemyPlayer, x, y) => {
    if (isAi === true) {
      let i = 0;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        console.log(`illegal hit: ${i}, coord: [${x}][${y}]`);
        i++;
      }
      while (enemyGameboard.receiveAttack(x, y) !== 0);
    }
    enemyGameboard.receiveAttack(x, y);
    playerTurn = false;
    enemyPlayer.playerTurn = true;
    return { x, y };
  };

  return {
    getName, playTurn, checkTurn, isAi,
  };
};

export { Ship, Gameboard, Player };
