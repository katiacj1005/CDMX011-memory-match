import data from '../data/pokemon/pokemon.js';
import card from "./card.js";


const arrayPokemons = data.items;
const dataDuplicada = arrayPokemons.concat(arrayPokemons);

const Board = () => {
    const divBoard = document.createElement('div');
    divBoard.className = 'Board';
    
    // divBoard.appendChild(card())
    dataDuplicada.forEach(unPokemon => divBoard.appendChild(card(unPokemon)));
    console.log(dataDuplicada);
  

    return divBoard;
  }

  export default Board;