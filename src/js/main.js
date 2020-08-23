const $btn = document.getElementById('btn-kick');
const $youAttack = document.getElementById('character-attack');
const $enemyAttack = document.getElementById('enemy-attack');

const PIKACHU = {
    name: 'Pikachu',
    fullHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character'),
    attack: {
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
    }
}

const CHARMANDER = {
    name: 'Charmander',
    fullHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy'),
    attack: {
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
    }
};

const youPokemon = PIKACHU;
const enemyPokemon = CHARMANDER;

$youAttack.addEventListener('click', function(e) {
    const action = e.target.id
    attack(youPokemon, action, enemyPokemon)
})

$enemyAttack.addEventListener('click', function(e) {
    const action = e.target.id
    attack(enemyPokemon, action, youPokemon)
})

function attack(pokemon, action, target) {
    for (let key in pokemon.attack) {
        if (key == action) {
            console.log(pokemon.attack[key].name);
            console.log(`Покемон ${pokemon.name} использует атаку ${pokemon.attack[key].name} на покемона ${target.name} силой ${pokemon.attack[key].power}`);
            changeHP(random(pokemon.attack[key].power), target);
            return
        }
    }
}

function renderHP(pokemon) {
    renderHPLife(pokemon);
    renderHPProgressBar(pokemon);
}

function renderHPLife(pokemon) {
    pokemon.elHP.innerText = `${pokemon.damageHP} / ${pokemon.fullHP}`
}

function renderHPProgressBar(pokemon) {
    pokemon.elProgressBar.style.width = `${pokemon.damageHP}%`
}

function changeHP(count, pokemon) {
    if (pokemon.damageHP < count) {
        pokemon.damageHP = 0;
        alert(`Покемон ${pokemon.name} проиграл бой!`);
        endGame($youAttack);
        endGame($enemyAttack);
    } else {
        pokemon.damageHP -= count;
    }
    renderHP(pokemon);
}

function endGame(pokemon) {
    const $controlButton = pokemon.querySelectorAll('.button');
    
    for (const key in $controlButton) {
        if ($controlButton[key].className) {
            $controlButton[key].disabled = true;
        }
    }
}

function random(power) {
    const damage = Math.round(Math.random() * power);
    console.log(damage);
    if (damage == 0) {
        alert('Miss!');
    }
    return damage;
}

function init() {
    console.log('Start Game!!!');
    renderHP(youPokemon);
    renderHP(enemyPokemon);
}

init();

