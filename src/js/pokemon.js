import Game from "./game.js";

class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressBar = document.getElementById(`progressbar-${name}`);
        this.elImg = document.getElementById(`img-${name}`);
    }
}

export default class Pokemon extends Selectors {

    constructor({ name, type, hp, selectors, attacks, img}) {
      super(selectors);

      this.name = name;
      this.type = type;
      this.fullHP = hp;
      this.currentHP = hp;
      this.attacks = attacks;
      this.img = img
      this.selector = selectors;

      this.renderHP();
  };

  renderHP = () => {
    this.renderHPLife();
    this.renderHPProgressBar();
    this.renderPokemonImage();
  };

  renderHPLife = () => {
    this.elHP.innerText = `${this.currentHP} / ${this.fullHP}`
  };

  renderHPProgressBar = () => { 
    const healthBar = (this.currentHP/this.fullHP) * 100;
    this.elProgressBar.style.width = `${healthBar}%`
    if (healthBar < 60 && healthBar > 20) {
      this.elProgressBar.classList.add("low");
    } else if (healthBar < 20) {
      this.elProgressBar.classList.remove("low");
      this.elProgressBar.classList.add("critical");
    }
  };

  renderPokemonImage= () => {
    this.elImg.src = this.img
  }

  changeHP = (attackPower, targetPokemon) => {
    targetPokemon.currentHP -= attackPower;

    if (targetPokemon.currentHP <= 0) {
      targetPokemon.currentHP = 0;
      
      alert(`Покемон ${targetPokemon.name} проиграл бой!`);
      this.endGame();
      // targetPokemon.endGame();
      // Game.startGame();
    }
    targetPokemon.renderHP();
  }; 

  attack = (action, targetPokemon) => {
    const attackPower = this.attackRandom(action.minDamage, action.maxDamage);
    this.changeHP(attackPower, targetPokemon);
    this.generateLog(this, targetPokemon, attackPower, action.name)
    };

  attackRandom = (minDmg, maxDmg) => {
    return Math.floor(Math.random() * (maxDmg - minDmg + 1) ) + minDmg;
  }
    
  endGame = () => {
    // console.log(player1);
    // Game.startGame();
    // for (const key in this.ability) {
    //   if (this.ability.hasOwnProperty(key)) {
    //     this.ability[key].btn.disabled = true;
    //   }
    // }
    // this.attacks.forEach(item => {
    //   console.log($btn);
    // })
  };
 
  generateLog = (attackerPokemon, targetPokemon, attackPower, abilityId) => {
    // let logsArr;
    let res;
    console.log(abilityId);


    const $p = document.createElement('p');
    const $logs = document.querySelector('#logs');
    
    const missLog = `О нет! ${attackerPokemon.name} промахнулся.`
      
    // switch (abilityId) {
    //   case 'thunder jolt':
    //     logsArr = [
    //       `${attackerPokemon.name} заряжает свои щечки и атакует ${targetPokemon.name} на ${attackPower}.`,
    //       `Пока ${targetPokemon.name} отвлекся, ${attackerPokemon.name} накопил заряд и нанес электрический удар силой ${attackPower}.`
    //     ];
    //     break;
    //   case 'electro ball':
    //     logsArr = [
    //       `${attackerPokemon.name} молниеносно атакует ${targetPokemon.name} на ${attackPower}.`,
    //       `${attackerPokemon.name} очень быстро бьет своими лапками ${targetPokemon.name} нанося ему ${attackPower} урона.`,
    //     ];
    //     break;
    //   case 'volt tackle':
    //     logsArr = [
    //       `${attackerPokemon.name} неожиданно толкает ${targetPokemon.name} плечом, чем наносит ему ${attackPower} урона.`,
    //       `${attackerPokemon.name} наносит ${attackPower} урона ${targetPokemon.name} ударив его хвостом.`
    //     ];
    //     break;
    //   case 'thunder crack':
    //     logsArr = [
    //       `${attackerPokemon.name} наносит невероятно мощную электрическую атаку ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
    //       `${attackerPokemon.name} ударяет молнией ${targetPokemon.name} и наносит ему ${attackPower} урона.`
    //     ];
    //     break;
    //   case 'flamethrower':
    //     logsArr = [
    //       `${attackerPokemon.name} царапает своими острыми когтями ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
    //       `Острые когти ${attackerPokemon.name} царапают ${targetPokemon.name} на ${attackPower} урона.`,
    //     ];
    //     break;
    //   case 'ember':
    //     logsArr = [
    //       `${attackerPokemon.name} поражает маленькими огоньками ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
    //       `Огоньки ${attackerPokemon.name} поражают ${targetPokemon.name} на ${attackPower} урона.`,
    //     ];
    //     break;
    //   case 'burning tail':
    //     logsArr = [
    //       `${attackerPokemon.name} кусает раскаленными зубами ${targetPokemon.name}. ${targetPokemon.name} получил ${attackPower} урона.`,
    //       `Раскаленные до бела зубы ${attackerPokemon.name} впиваются бедного ${targetPokemon.name} и наносят ему ${attackPower} урона.`,
    //     ];
    //     break;
    //   case 'fire spin':
    //     logsArr = [
    //       `${attackerPokemon.name} поражает ${targetPokemon.name} огненным взрывом. ${targetPokemon.name} получил ${attackPower} урона.`,
    //       `Огненный взрыв ${attackerPokemon.name} поражает ${targetPokemon.name} и наносят ему ${attackPower} урона.`,
    //     ];
    //     break;
    // }
    
    // res = attackPower === 0 ? missLog : `${logsArr[((Math.ceil(Math.random() * 2)) - 1)]} ${attackerPokemon.name} [${attackerPokemon.currentHP} / ${attackerPokemon.fullHP}], ${targetPokemon.name} [${targetPokemon.currentHP} / ${targetPokemon.fullHP}]`;
    res =  attackPower === 0 ? missLog : `Покемон ${attackerPokemon.name}  [${attackerPokemon.currentHP} / ${attackerPokemon.fullHP}] использует ${abilityId} и наносит ${targetPokemon.name} [${targetPokemon.currentHP} / ${targetPokemon.fullHP}] ${attackPower} урона`
    $p.innerText = res;
    
    $logs.insertBefore($p, $logs.firstElementChild);
      
    return res
  }
}