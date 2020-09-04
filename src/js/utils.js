export function clickCounter() {
    let count = 0;
  
    return function(maxCount, name, $btn) {
      // console.log(maxCount);
      // console.log($btn);
      ++count
      console.log(`[ ${count} / ${maxCount} ] ${name}`);
      $btn.innerText = `[ ${count} / ${maxCount} ] ${name}`;
    //   this.attack(name, targetPokemon);
      // attackerPokemon.ability[action].currentUse = ++count
      // attackerPokemon.renderButtonText();
      // console.log(`${attackerPokemon.ability[action].currentUse} / ${attackerPokemon.ability[action].maxUse}`);
      if (maxCount <= count) {
        $btn.disabled = true;
      }
    }
  }