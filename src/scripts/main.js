'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

document.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('.start');
  const cells = document.querySelectorAll('.field-row');

  start.addEventListener('click', () => {
    game.start();
    render();
  });

  function render() {
    const board = game.getState();

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const number = board[i][j];

        cells[i].children[j].textContent = number === 0 ? '' : number;
      }
    }
  }
});
