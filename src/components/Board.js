
import data from '../data/pokemon/pokemon.js';
import card from "./card.js";


const arrayPokemons = data.items;
const dataDuplicada = arrayPokemons.concat(arrayPokemons); 


 const Board = () => {

    //Esté es mi divBoard 
    const divBoard = document.createElement('div');
    divBoard.className = 'Board';
  
      let selectedItems = [];
      let arrayIdx = [];
      let contador = 0;

    //Está es otra forma de llamar la función flip 
    function flipCard(event) {
      console.log(event.target);
      let selectedElement = event.currentTarget;
      let selectedId = event.currentTarget.dataset.id;
      let selectedIdx = event.currentTarget.dataset.idx;
      arrayIdx.push(selectedIdx);
      selectedItems.push(selectedId);
      selectedElement.classList.toggle('active');
      
    }

      function checkForMatch () { 
     if(selectedItems[0] === selectedItems[1]){
       //Aquí vamos a dejar estáticas las tarjetas
       const flipA = document.querySelector(`[data-idx = '${arrayIdx[0]}']`)
       const flipB = document.querySelector(`[data-idx = '${arrayIdx[1]}']`)
       
       flipA.style.pointerEvents = 'none';
       flipB.style.pointerEvents = 'none';
       selectedItems = [];
       arrayIdx = [];
       contador += 1;
       if(contador === 9) {
         alert("¡GANASTE!")
       }
       
    }
      else if (selectedItems.length === 2 && selectedItems[0] !== selectedItems[1]){ 
        const flipA = document.querySelector(`[data-idx = '${arrayIdx[0]}']`)
        const flipB = document.querySelector(`[data-idx = '${arrayIdx[1]}']`)
        selectedItems = [];
        arrayIdx = [];
         setTimeout(() => { 
          flipA.classList.toggle('active');
          flipB.classList.toggle('active');
          }, 2000);

        }

     
      }
    
       
    dataDuplicada.forEach((unPokemon, index) => divBoard.appendChild(card(unPokemon, flipCard, checkForMatch, index)));
    console.log(dataDuplicada);
 
  
    return divBoard;
};



  export default Board;

