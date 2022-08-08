import React, { useState, useEffect } from 'react';
import { header } from './assets/svgs';
import { o } from './assets/svgs';
import { x } from './assets/svgs';
import './App.css';

const X = 'X';
const O = 'O';
const initialBoxStates = [];
for (let i = 0; i < 9; i++) {
   initialBoxStates.push(null);
}

const initialGameState = { isOver: false, boxIndexes: null, stateOfBoxes: null };
const gameOverIndexes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const gameOverStates = [O, X];

const gameOver = array => {
   let currentState = initialGameState;

   gameOverIndexes.forEach(indexSet => {
      gameOverStates.forEach(state => {
         if (array[indexSet[0]] === state && array[indexSet[1]] === state && array[indexSet[2]] === state) {
            currentState = { isOver: true, boxIndexes: indexSet, stateOfBoxes: state };
         }
      });
   });

   return currentState;
};

export default function App() {
   const [boxStates, setBoxStates] = useState(initialBoxStates);
   const [gameState, setGameState] = useState(initialGameState);

   const switchState = (newBoxState, index) => {
      setBoxStates(currentBoxStates => {
         const newBoxStates = [...currentBoxStates];
         newBoxStates[index] = newBoxState;
         return newBoxStates;
      });
   };

   function clickHandler(boxState, index) {
      if (gameState.isOver) {
         setBoxStates(initialBoxStates);
         setGameState(initialGameState);
      } else {
         switch (boxState) {
            case null:
               switchState(X, index);
               break;
            case X:
               switchState(O, index);
               break;
            case O:
               switchState(null, index);
               break;
            default:
               alert('Something went wrong');
               break;
         }
      }
   }

   const ticTacToe = boxStates.map((state, index) => {
      let className = state === X ? 'box box-x' : state === O ? 'box box-o' : 'box';

      if (gameState.isOver && gameState.boxIndexes.includes(index)) {
         const completionStyles = gameState.stateOfBoxes === X ? 'complete-x' : gameState.stateOfBoxes === O ? 'complete-o' : '';
         className += ' ' + completionStyles;
      }

      return (
         <div
            className={className}
            onClick={() => clickHandler(state, index)}
         >
            {state === X ? x : state === O ? o : null}
         </div>
      );
   });

   useEffect(() => {
      const newGameState = gameOver(boxStates);

      if (newGameState.isOver) {
         setGameState(newGameState);
      }
   }, [boxStates]);

   return (
      <div className='container'>
         <div className='header'>
            {header}
         </div>
         <div className='row'>
            {ticTacToe[0]}
            {ticTacToe[1]}
            {ticTacToe[2]}
         </div>
         <div className='row'>
            {ticTacToe[3]}
            {ticTacToe[4]}
            {ticTacToe[5]}
         </div>
         <div className='row'>
            {ticTacToe[6]}
            {ticTacToe[7]}
            {ticTacToe[8]}
         </div>
      </div>
   );
}