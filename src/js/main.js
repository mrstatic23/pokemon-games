'use strict'

const POKEMON = {
  renderHP: function() {
    this.renderHPLife();
    this.renderHPProgressBar();
  },
  renderHPLife: function() {
    this.elHP.innerText = `${this.currentHP} / ${this.fullHP}`
  },
  renderHPProgressBar: function() {
    this.elProgressBar.style.width = `${(this.currentHP/this.fullHP) * 100}%`
  },
  changeHP: function(attackPower, targetPokemon) {
    targetPokemon.currentHP -= attackPower;

    if (targetPokemon.currentHP <= 0) {
      targetPokemon.currentHP = 0;
      
      alert(`Покемон ${targetPokemon.name} проиграл бой!`);
      this.endGame();
      targetPokemon.endGame();
    }
    targetPokemon.renderHP();
  },
  attack: function(action, targetPokemon) {
    for (let key in this.ability) {
      if (key === action) {
        const attackPower = random(this.ability[key].power)
        
        this.changeHP(attackPower, targetPokemon);
        console.log(generateLog(this, targetPokemon, attackPower, key));
        return
        }
      }
    },
  endGame: function() {
    for (const key in this.abilityBtn) {
      if (this.abilityBtn.hasOwnProperty(key)) {
        this.abilityBtn[key].disabled = true;
      }
    }
  },
};

const PIKACHU = {
  __proto__: POKEMON,
  name: 'Pikachu',
  fullHP: 150,
  currentHP: 150,
  elHP: document.getElementById('health-character'),
  elProgressBar: document.getElementById('progressbar-character'),
  abilityBtn: {
    thundershock: document.getElementById('thundershock'),
    quickAttack: document.getElementById('quickAttack'),
    slam: document.getElementById('slam'),
    thunderbolt: document.getElementById('thunderbolt'),
  },
  ability: {
    thundershock: {
      name: 'Удар грома',
      power: 7,
      count: 99,
    },
    quickAttack: {
      name: 'Быстрая атака',
      power: 10,
      count: 5,
    },
    slam: {
      name: 'Хлопок',
      power: 2,
      count: 4,
    },
    thunderbolt: {
      name: 'Удар молнии',
      power: 1000,
      count: 3,
    }
  },
}

const CHARMANDER = {
  __proto__: POKEMON,
  name: 'Charmander',
  fullHP: 200,
  currentHP: 200,
  elHP: document.getElementById('health-enemy'),
  elProgressBar: document.getElementById('progressbar-enemy'),
  abilityBtn: {
    scratch: document.getElementById('scratch'),
    ember: document.getElementById('ember'),
    fireFang: document.getElementById('fireFang'),
    flameBurst: document.getElementById('flameBurst'),
  },
  ability: {
    scratch: {
      name: 'Царапка',
      power: 10,
      count: 99,
    },
    ember: {
      name: 'Тлеющие угли',
      power: 5,
      count: 5,
    },
    fireFang: {
      name: 'Огненный клык',
      power: 11,
      count: 2,
    },
    flameBurst: {
      name: 'Взрыв пламени',
      power: 1000,
      count: 3,
    }
  },
}

const youPokemon = PIKACHU;
const enemyPokemon = CHARMANDER;

function generateLog(attackerPokemon, targetPokemon, attackPower, abilityId) {
  let logsArr;
  let res;
  
  const $p = document.createElement('p');
  const $logs = document.querySelector('#logs');
  
  const missLog = `О нет! ${attackerPokemon.name} промахнулся.`
    
  switch (abilityId) {
    case 'thundershock':
      logsArr = [
        `${attackerPokemon.name} заряжает свои щечки и атакует ${targetPokemon.name} на ${attackPower}.`,
        `Пока ${targetPokemon.name} отвлекся, ${attackerPokemon.name} накопил заряд и нанес электрический удар силой ${attackPower}.`
      ];
      break;
    case 'quickAttack':
      logsArr = [
        `${attackerPokemon.name} молниеносно атакует ${targetPokemon.name} на ${attackPower}.`,
        `${attackerPokemon.name} очень быстро бьет своими лапками ${targetPokemon.name} нанося ему ${attackPower} урона.`,
      ];
      break;
    case 'slam':
      logsArr = [
        `${attackerPokemon.name} неожиданно толкает ${targetPokemon.name} плечом, чем наносит ему ${attackPower} урона.`,
        `${attackerPokemon.name} наносит ${attackPower} урона ${targetPokemon.name} ударив его хвостом.`
      ];
      break;
    case 'thunderbolt':
      logsArr = [
        `${attackerPokemon.name} наносит невероятно мощную электрическую атаку ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
        `${attackerPokemon.name} ударяет молнией ${targetPokemon.name} и наносит ему ${attackPower} урона.`
      ];
      break;
    case 'scratch':
      logsArr = [
        `${attackerPokemon.name} царапает своими острыми когтями ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
        `Острые когти ${attackerPokemon.name} царапают ${targetPokemon.name} на ${attackPower} урона.`,
      ];
      break;
    case 'ember':
      logsArr = [
        `${attackerPokemon.name} поражает маленькими огоньками ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
        `Огоньки ${attackerPokemon.name} поражают ${targetPokemon.name} на ${attackPower} урона.`,
      ];
      break;
    case 'fireFang':
      logsArr = [
        `${attackerPokemon.name} кусает раскаленными зубами ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
        `Раскаленные до бела зубы ${attackerPokemon.name} впиваются бедного ${targetPokemon.name} и наносят ему ${attackPower} урона.`,
      ];
      break;
    case 'flameBurst':
      logsArr = [
        `${attackerPokemon.name} поражает ${targetPokemon.name} огненным взрывом. ${targetPokemon.name} получил ${attackPower} урона.`,
        `Огненный взрыв ${attackerPokemon.name} поражает ${targetPokemon.name} и наносят ему ${attackPower} урона.`,
      ];
      break;
  }
  
  res = attackPower === 0 ? missLog : `${logsArr[((Math.ceil(Math.random() * 2)) - 1)]} ${attackerPokemon.name} [${attackerPokemon.currentHP} / ${attackerPokemon.fullHP}], ${targetPokemon.name} [${targetPokemon.currentHP} / ${targetPokemon.fullHP}]`;
  
  $p.innerText = res;
  
  $logs.insertBefore($p, $logs.firstElementChild);
    
  return res
}

function random(power) {
  return Math.floor(Math.random() * power);
}

function clickCounter() {
  let count = 0;

  return function(attackerPokemon, targetPokemon, action) {
    const abilityCount = attackerPokemon.ability[action].count

    attackerPokemon.attack(action, targetPokemon);
    console.log(`${++count} / ${abilityCount}`);

    abilityCount <= count ? attackerPokemon.abilityBtn[action].disabled = true : '';
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


youPokemon.abilityBtn.thundershock.addEventListener('click', function() {
  thundershockClick(youPokemon, enemyPokemon, 'thundershock');
});

youPokemon.abilityBtn.quickAttack.addEventListener('click', function() {
  quickAttackClick(youPokemon, enemyPokemon,'quickAttack');
});

youPokemon.abilityBtn.slam.addEventListener('click', function() {
  slamClick(youPokemon, enemyPokemon,'slam');
});

youPokemon.abilityBtn.thunderbolt.addEventListener('click', function() {
  thunderboltClick(youPokemon, enemyPokemon,'thunderbolt');
});

enemyPokemon.abilityBtn.scratch.addEventListener('click', function() {
  scratchClick(enemyPokemon, youPokemon, 'scratch');
});

enemyPokemon.abilityBtn.ember.addEventListener('click', function() {
  emberClick(enemyPokemon, youPokemon,'ember');
});

enemyPokemon.abilityBtn.fireFang.addEventListener('click', function() {
  fireFangClick(enemyPokemon, youPokemon,'fireFang');
});

enemyPokemon.abilityBtn.flameBurst.addEventListener('click', function() {
  flameBurstClick(enemyPokemon, youPokemon,'flameBurst');
});

function init() {
  console.log('Start Game!!!');
  youPokemon.renderHP();
  enemyPokemon.renderHP();
}

// TODO: Save for future
// youPokemon.abilityBtn.addEventListener('click', function(e) {
//   const action = e.target.id;
  
//   youPokemon.attack(action, enemyPokemon);
// });

// enemyPokemon.abilityBtn.addEventListener('click', function(e) {
//   const action = e.target.id;
  
//   enemyPokemon.attack(action, youPokemon);
// });

init()