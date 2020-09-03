'use strict';
import Pokemon from './pokemon.js';

const player1 = new Pokemon({
  name: 'Pikachu',
  type: 'electric',
  hp: 150,
  selectors: 'character',
  ability: {
    thundershock: {
      name: 'Удар грома',
      power: 7,
      currentUse: 0,
      maxUse: 99,
      btn: document.getElementById('thundershock'),
    },
    quickAttack: {
      name: 'Быстрая атака',
      power: 10,
      currentUse: 0,
      maxUse: 5,
      btn: document.getElementById('quickAttack'),
    },
    slam: {
      name: 'Хлопок',
      power: 2,
      currentUse: 0,
      maxUse: 4,
      btn: document.getElementById('slam'),
    },
    thunderbolt: {
      name: 'Удар молнии',
      power: 1000,
      currentUse: 0,
      maxUse: 3,
      btn: document.getElementById('thunderbolt'),
    },
  }
});

const player2 = new Pokemon({
  name: 'Charmander',
  type: 'fire',
  hp: 200,
  selectors: 'enemy',
  ability: {
    scratch: {
      name: 'Царапка',
      power: 10,
      currentUse: 0,
      maxUse: 99,
      btn: document.getElementById('scratch'),
    },
    ember: {
      name: 'Тлеющие угли',
      power: 5,
      currentUse: 0,
      maxUse: 5,
      btn: document.getElementById('ember'),
    },
    fireFang: {
      name: 'Огненный клык',
      power: 11,
      currentUse: 0,
      maxUse: 2,
      btn: document.getElementById('fireFang'),
    },
    flameBurst: {
      name: 'Взрыв пламени',
      power: 1000,
      currentUse: 0,
      maxUse: 1,
      btn: document.getElementById('flameBurst'),
    }
  },
});

function clickCounter() {
  let count = 0;

  return function(attackerPokemon, targetPokemon, action) {

    attackerPokemon.attack(action, targetPokemon);
    attackerPokemon.ability[action].currentUse = ++count
    attackerPokemon.renderButtonText();
    console.log(`${attackerPokemon.ability[action].currentUse} / ${attackerPokemon.ability[action].maxUse}`);
    
    if (attackerPokemon.ability[action].maxUse <= count) {
      attackerPokemon.ability[action].btn.disabled = true
    }
  }
}
// You Pokemon
const thundershockClick = clickCounter();
const quickAttackClick = clickCounter();
const slamClick = clickCounter();
const thunderboltClick = clickCounter();
// Enemy Pokemon
const scratchClick = clickCounter();
const emberClick = clickCounter();
const fireFangClick = clickCounter();
const flameBurstClick = clickCounter();

player1.ability.thundershock.btn.addEventListener('click', function() {
    thundershockClick(player1, player2, 'thundershock');
});

player1.ability.quickAttack.btn.addEventListener('click', function() {
  quickAttackClick(player1, player2, 'quickAttack');
});

player1.ability.slam.btn.addEventListener('click', function() {
  slamClick(player1, player2, 'slam');
});

player1.ability.thunderbolt.btn.addEventListener('click', function() {
  thunderboltClick(player1, player2, 'thunderbolt');
});

player2.ability.scratch.btn.addEventListener('click', function() {
  scratchClick(player2, player1, 'scratch');
});

player2.ability.ember.btn.addEventListener('click', function() {
  emberClick(player2, player1, 'ember');
});

player2.ability.fireFang.btn.addEventListener('click', function() {
  fireFangClick(player2, player1, 'fireFang');
});

player2.ability.flameBurst.btn.addEventListener('click', function() {
  flameBurstClick(player2, player1, 'flameBurst');
});

// TODO: Save for future
// youPokemon.abilityBtn.addEventListener('click', function(e) {
//   const action = e.target.id;
  
//   youPokemon.attack(action, enemyPokemon);
// });

// enemyPokemon.abilityBtn.addEventListener('click', function(e) {
//   const action = e.target.id;
  
//   enemyPokemon.attack(action, youPokemon);
// });