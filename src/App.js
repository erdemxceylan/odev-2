import React, { useState, useEffect } from 'react';
import { header } from './assets/svgs';
import './App.css';
import { o } from './assets/svgs';
import { x } from './assets/svgs';

const X = 'X';
const O = 'O';
const boxStates = [null, X, O];
const initialGameState = [];
for (let i = 0; i < 9; i++) {
   initialGameState.push(boxStates[0]);
}

const gameOverIndexes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const gameOver = array => {
   const gameOverStates = [O, X];

   gameOverIndexes.forEach(indexSet /* [0, 1, 2], ... */ => {
      gameOverStates.forEach(state /* O, or X*/ => {
         if (array[indexSet[0]] === state && array[indexSet[1]] === state && array[indexSet[2]] === state) {
            console.log({ isGameOver: true, boxIndexes: indexSet, state: state });
            return { isGameOver: true, boxIndexes: indexSet, box: state };
         }
      });
   });

   return { isGameOver: false, boxIndexes: null, box: null };
};

export default function App() {
   const [gameState, setGameState] = useState(initialGameState);

   const switchState = (newBoxState, index) => {
      setGameState(currentGameState => {
         const newGameState = [...currentGameState];
         newGameState[index] = newBoxState;
         console.log(currentGameState, newGameState);
         return newGameState;
      });
   };

   function clickHandler(boxState, index) {
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

   const ticTacToe = gameState.map((state, index) => {
      return (
         <div
            className={state === X ? 'box box-x' : state === O ? 'box box-o' : 'box'}
            onClick={() => clickHandler(state, index)}
         >
            {state === X ? x : state === O ? o : null}
         </div>
      );
   });

   useEffect(() => {
      const { isGameOver, boxIndexes, box } = gameOver(gameState);

      if (isGameOver) {
         boxIndexes.forEach(index => {
            console.log(ticTacToe[index]);
         });
         // setGameState(initialGameState);
      }
   });

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