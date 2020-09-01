class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressBar = document.getElementById(`progressbar-${name}`);
    }
}

export default class Pokemon extends Selectors {

    constructor({ name, type, hp, selectors, ability }) {
      super(selectors);

      this.name = name;
      this.type = type;
      this.fullHP = hp;
      this.currentHP = hp;
      this.ability = ability;

      this.renderHP();
  };

  renderHP = () => {
    this.renderHPLife();
    this.renderHPProgressBar();
    this.renderButtonText();
  };

  renderHPLife = () => {
    this.elHP.innerText = `${this.currentHP} / ${this.fullHP}`
  };

  renderHPProgressBar = () => {
    this.elProgressBar.style.width = `${(this.currentHP/this.fullHP) * 100}%`
  };

  renderButtonText = () => {
    for (const key in this.ability) {
      if (this.ability.hasOwnProperty(key)) {
        this.ability[key].btn.innerText = `[ ${this.ability[key].currentUse} / ${this.ability[key].maxUse}] ${this.ability[key].name}`;
      }
    }
  };

  changeHP = (attackPower, targetPokemon) => {
    targetPokemon.currentHP -= attackPower;

    if (targetPokemon.currentHP <= 0) {
      targetPokemon.currentHP = 0;
      
      alert(`Покемон ${targetPokemon.name} проиграл бой!`);
      this.endGame();
      targetPokemon.endGame();
    }
    targetPokemon.renderHP();
  }; 

  attack = (action, targetPokemon) => {
    for (let key in this.ability) {
      if (key === action) {
        const attackPower = this.random(this.ability[key].power)
        this.changeHP(attackPower, targetPokemon);
        console.log(this.generateLog(this, targetPokemon, attackPower, key));
        return
        }
      }
    };

  endGame = () => {
    for (const key in this.ability) {
      if (this.ability.hasOwnProperty(key)) {
        this.ability[key].btn.disabled = true;
      }
    }
  };

  random = (power) => {
    return Math.floor(Math.random() * power);
  }

  generateLog = (attackerPokemon, targetPokemon, attackPower, abilityId) => {
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
}