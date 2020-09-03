'use strict';
import Pokemon from './pokemon.js';
import { clickCounter } from './utils.js';
import { pokemons } from './pokemons.js';
import Game from './game.js';

// const player1Pokemon = pokemons.find(item => item.name === 'Mew');
// const player1Pokemon = pokemons[Math.floor(Math.random()*pokemons.length)];
// const player2Pokemon = pokemons.find(item => item.name === 'Charmander');
// const player2Pokemon = pokemons[Math.floor(Math.random()*pokemons.length)];
// const $player1Control = document.getElementById('player1-attack');
// const $player1ControlHeader = document.createElement('h4');
// const $player2Control = document.getElementById('player2-attack');
// const $player2ControlHeader = document.createElement('h4');

// const player1 = new Pokemon({
//   selectors: 'player1',
//   ...player1Pokemon,
// });

// console.log(player1);

// let player2 = new Pokemon({
//   selectors: 'player2',
//   ...player2Pokemon,
// });

// $player1ControlHeader.innerText = player1.name;
// $player1Control.appendChild($player1ControlHeader)
// player1.attacks.forEach(item => {
//   const $btn = document.createElement('button');
//   const btnCount = clickCounter();

//   $btn.classList.add('button');
//   $btn.innerText = `[ 0 / ${item.maxCount} ] ${item.name}`;

//   $btn.addEventListener('click', () => {
//     player1.attack(item, player2);
//     btnCount(item.maxCount, item.name, $btn);
//   })

//   $player1Control.appendChild($btn);
// });


// $player2ControlHeader.innerText = player2.name;
// $player2Control.appendChild($player2ControlHeader)
// player2.attacks.forEach(item => {
//   const $btn = document.createElement('button');
//   const btnCount = clickCounter();
  
//   $btn.classList.add('button');
//   $btn.innerText = `[ 0 / ${item.maxCount} ] ${item.name}`;

//   $btn.addEventListener('click', () => {
//     player2.attack(item, player1);
//     btnCount(item.maxCount, item.name, $btn);
//   })

//   $player2Control.appendChild($btn);
// })

const game = new Game();
console.log(game);