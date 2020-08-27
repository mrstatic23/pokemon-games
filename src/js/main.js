'use strict';

const PIKACHU = {
    name: 'Pikachu',
    fullHP: 150,
    currentHP: 150,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character'),
    abilityBtn: document.getElementById('character-attack'),
    ability: {
        thundershock: {
            name: 'Удар грома',
            power: 7,
        },
        quickAttack: {
            name: 'Быстрая атака',
            power: 10
        },
        slam: {
            name: 'Хлопок',
            power: 2
        },
        thunderbolt: {
            name: 'Удар молнии',
            power: 40
        }
    },
    
    renderHP,
    renderHPLife,
    renderHPProgressBar,
    changeHP,
    attack,
    endGame
}

const CHARMANDER = {
    name: 'Charmander',
    fullHP: 200,
    currentHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy'),
    abilityBtn: document.getElementById('enemy-attack'),
    ability: {
        scratch: {
            name: 'Царапка',
            power: 10
        },
        ember: {
            name: 'Тлеющие угли',
            power: 5
        },
        fireFang: {
            name: 'Огненный клык',
            power: 11
        },
        flameBurst: {
            name: 'Взрыв пламени',
            power: 3
        }
    },

    renderHP,
    renderHPLife,
    renderHPProgressBar,
    changeHP,
    attack,
    endGame
};

const youPokemon = PIKACHU;
const enemyPokemon = CHARMANDER;

function attack(action, targetPokemon) {
    for (let key in this.ability) {
        if (key == action) {
            const attackPower = random(this.ability[key].power)

            changeHP(attackPower, targetPokemon);
            console.log(generateLog(this, targetPokemon, attackPower, key));
            return
        }
    }
}

function generateLog(attackerPokemon, targetPokemon, attackPower, abilityId) {
    let logsArr;

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
                `${attackerPokemon.name} царапет своими острыми когтями ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
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
                `Расскаленные до бела зубы ${attackerPokemon.name} впиваются бедного ${targetPokemon.name} и наносят ему ${attackPower} урона.`,
            ];
            break;
        case 'flameBurst':
            logsArr = [
                `${attackerPokemon.name} поражает ${targetPokemon.name} огненным взрывом. ${targetPokemon.name} получил ${attackPower} урона.`,
                `Огненный взрыв ${attackerPokemon.name} поражает ${targetPokemon.name} и наносят ему ${attackPower} урона.`,
            ];
            break;
    }

    return attackPower === 0 ? missLog : `${logsArr[((Math.ceil(Math.random() * 2)) - 1)]} ${attackerPokemon.name} [${attackerPokemon.currentHP} / ${attackerPokemon.fullHP}], ${targetPokemon.name} [${targetPokemon.currentHP} / ${targetPokemon.fullHP}]`; 
    // console.log(logsArr.length);
    // return attackPower === 0 ? missLog : `${logsArr[random(logsArr.length) - 1]} ${attackerPokemon.name} [${attackerPokemon.currentHP} / ${attackerPokemon.fullHP}], ${targetPokemon.name} [${targetPokemon.currentHP} / ${targetPokemon.fullHP}]`; 
}

function renderHP() {
    this.renderHPLife();
    this.renderHPProgressBar();
}

function renderHPLife() {
    this.elHP.innerText = `${this.currentHP} / ${this.fullHP}`
}

function renderHPProgressBar() {
    this.elProgressBar.style.width = `${(this.currentHP/this.fullHP) * 100}%`
}

function changeHP(attackPower, targetPokemon) {
    targetPokemon.currentHP -= attackPower;

    if (targetPokemon.currentHP <= 0) {
        targetPokemon.currentHP = 0;

        alert(`Покемон ${targetPokemon.name} проиграл бой!`);
        youPokemon.endGame();
        enemyPokemon.endGame();
    }

    targetPokemon.renderHP();
}

function endGame() {
    const $controlButton = this.abilityBtn.querySelectorAll('.button');
    
    for (const key in $controlButton) {
        if ($controlButton[key].className) {
            $controlButton[key].disabled = true;
        }
    }
}

function random(count) {
    const res = Math.floor(Math.random() * count);
    console.log(res);
    // return Math.floor(Math.random() * power);
    return res
}

function init() {
    console.log('Start Game!!!');
    youPokemon.renderHP();
    enemyPokemon.renderHP();
}

youPokemon.abilityBtn.addEventListener('click', function(e) {
    const action = e.target.id;

    youPokemon.attack(action, enemyPokemon);
});

enemyPokemon.abilityBtn.addEventListener('click', function(e) {
    const action = e.target.id;

    enemyPokemon.attack(action, youPokemon);
});

init();