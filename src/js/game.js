import Pokemon from './pokemon.js';
import { clickCounter } from './utils.js';
import { pokemons } from './pokemons.js';

export default class Game {
    constructor() {
        this.player1Pokemon = pokemons[Math.floor(Math.random()*pokemons.length)];
        this.player2Pokemon = pokemons[Math.floor(Math.random()*pokemons.length)];

        this.player1 = new Pokemon({
            selectors: 'player1',
            ...this.player1Pokemon,
        });
        this.player2 = new Pokemon({
            selectors: 'player2',
            ...this.player2Pokemon,
        });

        this.renderPokemonUI(this.player1, this.player2);
        this.renderPokemonUI(this.player2, this.player1);
    }

    renderPokemonUI = (player, target) => {
        console.log(player);
        const { name, selector } = player;

        const $playerControl = document.getElementById(`${selector}-attack`);
        const $playerControlHeader = document.createElement('h4');
        
        $playerControlHeader.innerText = name;
        $playerControl.appendChild($playerControlHeader)

        player.attacks.forEach(item => {
            const $btn = document.createElement('button');
            const btnCount = clickCounter();

            $btn.classList.add('button');
            $btn.innerText = `[ 0 / ${item.maxCount} ] ${item.name}`;
            
            $btn.addEventListener('click', () => {
                player.attack(item, target);
                btnCount(item.maxCount, item.name, $btn);
            })

            $playerControl.appendChild($btn);
        })
    }

    startGame = () => {

    }

    restartGame = () => {

    }

    endGame = () => {

    }
}