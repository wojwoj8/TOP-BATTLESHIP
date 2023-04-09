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
  mainContentRight.appendChild(titleAI);

  mainContentLeft.classList = 'main-content-left';
  mainContentRight.classList = 'main-content-right';
  mainContentLeft.appendChild(createGameBoard());
  mainContentRight.appendChild(createGameBoard());

  mainContent.classList = 'main-content';

  mainProjectTitle.classList = 'main-title';
  mainProjectTitle.textContent = '';
  main.classList = 'main';

  main.appendChild(mainProjectTitle);
  mainContent.appendChild(mainContentLeft);
  mainContent.appendChild(mainContentRight);
  main.appendChild(mainContent);

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

function createGameBoard() {
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
      cellDiv.addEventListener('click', () => {
        console.log(`clicked cell at x:${col}, y:${row}`);
      });
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

  return content;
}
export default webInit;
