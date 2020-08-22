const $btn = document.getElementById('btn-kick')

const PIKACHU = {
    name: 'Pikachu',
    fullHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character')
}

const CHARMANDER = {
    name: 'Charmander',
    fullHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy')
}

$btn.addEventListener('click', function() {
    console.log('Kick!');
    changeHP(random(10), CHARMANDER);

})

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
        $btn.disabled = true;
    } else {
        pokemon.damageHP -= count;
    }
    renderHP(pokemon);
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
    renderHP(PIKACHU);
    renderHP(CHARMANDER);
}

init();

