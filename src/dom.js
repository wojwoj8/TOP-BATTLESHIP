import { Ship, Gameboard, Player } from './logic';
import { mainLoop } from './mainLoop';

// function createPlayer() {
//   const input = document.createElement('input');
//   const button = document.createElement('button');
//   button.textContent = 'Click';
//   button.addEventListener('click', mainLoop.createPlayers(input.value));
// }

function createHeader() {
  const header = document.createElement('div');
  const title = document.createElement('h1');

  header.classList = 'header';
  title.textContent = 'BATTLESHIPS';
  header.appendChild(title);

  return header;
}

function createMain() {
  const main = document.createElement('div');
  const mainProjectTitle = document.createElement('h2');
  const mainContent = document.createElement('div');
  const mainContentLeft = document.createElement('div');
  const mainContentRight = document.createElement('div');

  const titlePlayer = document.createElement('h2');
  const titleAI = document.createElement('h2');

  titlePlayer.textContent = 'Player';
  titleAI.textContent = 'AI';

  mainContentLeft.appendChild(titlePlayer);

  mainContentLeft.classList = 'main-content-left';
  mainContentRight.classList = 'main-content-right';
  mainContentLeft.appendChild(createGameBoard('left'));

  mainContent.classList = 'main-content';

  mainProjectTitle.classList = 'main-title';
  mainProjectTitle.textContent = '';
  main.classList = 'main';

  mainContentRight.appendChild(titleAI);
  mainContentRight.appendChild(createGameBoard('right'));

  main.appendChild(mainProjectTitle);
  mainContent.appendChild(mainContentLeft);
  mainContent.appendChild(mainContentRight);
  main.appendChild(mainContent);

  // mainContentRight.style.display = 'none';

  return main;
}

function createFooter() {
  const footer = document.createElement('div');
  //   const createdBy = document.createElement('p');
  footer.innerHTML = '<p>Created by <a href="https://github.com/wojwoj8">wojwoj8</a></p>';
  //   createdBy.textContent = 'Created By '
  footer.classList = 'footer';
  return footer;
}

function playT(col, row, cellDiv) {
  // console.log(`clicked cell at x:${col}, y:${row}`);
  const playerTurn = mainLoop.player1.playTurn(mainLoop.AIGameboard, mainLoop.AI, col, row);
  if (typeof (mainLoop.AIGameboard.table()[col][row]) === 'object') {
    cellDiv.style.backgroundColor = 'red';
  } else {
    cellDiv.style.backgroundColor = 'blue';
  }
  if (playerTurn.z === true) {
    const winner = document.querySelector('.main-title');
    winner.innerHTML = 'Player Won!!!';
  }
  const aiTurn = mainLoop.AI.playTurn(mainLoop.player1Gameboard, mainLoop.player1, col, row);
  // console.log(aiTurn.x);
  // console.log(aiTurn.x);
  const elements = document.querySelectorAll(`[data-x="${aiTurn.x}"][data-y="${aiTurn.y}"]`);
  const el = elements[0];
  if (typeof (mainLoop.player1Gameboard.table()[aiTurn.x][aiTurn.y]) === 'object') {
    el.style.backgroundColor = 'red';
  } else {
    el.style.backgroundColor = 'blue';
  }
  if (aiTurn.z === true) {
    const winner = document.querySelector('.main-title');
    winner.innerHTML = 'AI Won!!!';
  }

  console.log(mainLoop.player1Gameboard.table());
  cellDiv.removeEventListener('click', playT);
}

function createGameBoard(name) {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game-board');

  for (let row = 0; row < 10; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let col = 0; col < 10; col++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.setAttribute('data-x', col);
      cellDiv.setAttribute('data-y', row);
      if (name === 'right') {
        const playHandler = () => {
          playT(col, row, cellDiv);
          cellDiv.removeEventListener('click', playHandler);
        };
        cellDiv.addEventListener('click', playHandler);
      }
      rowDiv.appendChild(cellDiv);
    }
    gameBoard.appendChild(rowDiv);
  }
  return gameBoard;
}

function webInit() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  mainLoop.markShipsOnGameBoard();
  return content;
}
export default webInit;
