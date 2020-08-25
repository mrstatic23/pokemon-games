const $btn = document.getElementById('btn-kick');
// const $youAttack = document.getElementById('character-attack');
const $enemyAttack = document.getElementById('enemy-attack');

const PIKACHU = {
    name: 'Pikachu',
    fullHP: 100,
    currentHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character'),
    abilityBtn: document.getElementById('character-attack'),
    ability: {
        thundershock: {
            name: 'Удар грома',
            power: 7
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
    fullHP: 100,
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

youPokemon.abilityBtn.addEventListener('click', function(e) {
    const action = e.target.id;

    youPokemon.attack(action, enemyPokemon);
});

$enemyAttack.addEventListener('click', function(e) {
    const action = e.target.id;

    enemyPokemon.attack(action, youPokemon);
});

function attack(action, targetPokemon) {
    for (let key in this.ability) {
        if (key == action) {
            const attackPower = random(this.ability[key].power)

            console.log(`Покемон ${this.name} использует способность ${this.ability[key].name} на покемона ${targetPokemon.name} силой ${attackPower}`);
            changeHP(attackPower, targetPokemon);
            return
        }
    }
}

function renderHP() {
    this.renderHPLife();
    this.renderHPProgressBar();
}

function renderHPLife() {
    this.elHP.innerText = `${this.currentHP} / ${this.fullHP}`
}

function renderHPProgressBar() {
    this.elProgressBar.style.width = `${this.currentHP}%`
}

function changeHP(attackPower, targetPokemon) {
    if (targetPokemon.currentHP < attackPower) {
        targetPokemon.currentHP = 0;
        alert(`Покемон ${targetPokemon.name} проиграл бой!`);
        youPokemon.endGame();
        enemyPokemon.endGame();
    } else {
        targetPokemon.currentHP -= attackPower;
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

function random(power) {
    const damage = Math.round(Math.random() * power);

    if (damage == 0) {
        alert('Miss!');
    }
    
    return damage;
}

function init() {
    console.log('Start Game!!!');
    youPokemon.renderHP();
    enemyPokemon.renderHP();
}

init();

