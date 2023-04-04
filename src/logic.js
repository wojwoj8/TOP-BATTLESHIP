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

  const placeShip = (name, length, x, y) => {
    const ship = Ship(length);

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
    const tab = table()[x][y];
    // if missed
    if (tab === 0) {
      // console.log('miss');
      // console.log(tab);
      table()[x][y] = 2;
      // console.log(tab);
      // console.log(table()[x][y]);
      // console.log(tab);
    } else if (typeof tab === 'object') {
      const shipName = tab.name;
      // if there is more than 1 ships it finds under which index hides our attacked ship
      const index = shipsData.findIndex((element) => element.name === shipName);
      const shipAttackedFieldIndex = tab.index;
      // console.log(getShipsData()[index]);
      // console.log(getShipsData()[index].data.showHitTable());

      // change hit to true in shipsData
      getShipsData()[index].data.gotHit(shipAttackedFieldIndex);
      // console.log(getShipsData()[index].data.isSunk());
      // change hit to true in coordinates
      tab.hit = getShipsData()[index].data.showHitTable()[shipAttackedFieldIndex].hit;
      // console.log(getShipsData()[index].data.isSunk());
      // console.log(tab);
    }
  };

  return {
    table, placeShip, getShipsData, receiveAttack,
  };
};

export { Ship, Gameboard };
