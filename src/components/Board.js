
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

    //Está es otra forma de llamar la función flip 
    function flipCard(event) {
      //console.log(event.target);
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
       const pushA = document.querySelector(`[data-idx = '${arrayIdx[0]}']`)
       const pushB = document.querySelector(`[data-idx = '${arrayIdx[1]}']`)
       
       pushA.style.pointerEvents = 'none';
       pushB.style.pointerEvents = 'none';
       selectedItems = [];
       arrayIdx = [];
       {
         alert("¡hiciste match!")
       }


      
       
    }
      else if (selectedItems.length === 2 && selectedItems[0] !== selectedItems[1]){ 
        const pushA = document.querySelector(`[data-idx = '${arrayIdx[0]}']`)
        const pushB = document.querySelector(`[data-idx = '${arrayIdx[1]}']`)
        selectedItems = [];
        arrayIdx = [];
         setTimeout(() => { 
          pushA.classList.toggle('active');
          pushB.classList.toggle('active');

         }, 200);

      }

     
      }
    
       
    dataDuplicada.forEach((unPokemon, index)=> divBoard.appendChild(card(unPokemon, flipCard,checkForMatch, index)));
    console.log(dataDuplicada);
 
  
    return divBoard;
};



  export default Board;

