import React, { useState } from 'react';
import { header } from './assets/svgs';
import { x } from './assets/svgs';
import { o } from './assets/svgs';
import './App.css';

const X = 'X';
const O = 'O';
const boxStates = [null, X, O];
const initialGameState = [];
for (let i = 0; i < 9; i++) {
   initialGameState.push(boxStates[0]);
}

const gameOver = array => (
   (array[0] === O && array[1] === O && array[2] === O) ||
   (array[3] === O && array[4] === O && array[5] === O) ||
   (array[6] === O && array[7] === O && array[8] === O) ||
   (array[0] === O && array[3] === O && array[6] === O) ||
   (array[1] === O && array[4] === O && array[7] === O) ||
   (array[2] === O && array[5] === O && array[8] === O) ||
   (array[0] === O && array[4] === O && array[8] === O) ||
   (array[2] === O && array[4] === O && array[6] === O) ||
   (array[0] === X && array[1] === X && array[2] === X) ||
   (array[3] === X && array[4] === X && array[5] === X) ||
   (array[6] === X && array[7] === X && array[8] === X) ||
   (array[0] === X && array[3] === X && array[6] === X) ||
   (array[1] === X && array[4] === X && array[7] === X) ||
   (array[2] === X && array[5] === X && array[8] === X) ||
   (array[0] === X && array[4] === X && array[8] === X) ||
   (array[2] === X && array[4] === X && array[6] === X)
);

export default function App() {
   const [gameState, setGameState] = useState(initialGameState);

   const switchState = (newBoxState, index) => setGameState(currentGameState => {
      const newGameState = [...currentGameState];
      newGameState[index] = newBoxState;
      return newGameState;
   });

   function clickHandler(state, index) {
      switch (state) {
         case boxStates[0]:
            switchState(boxStates[1], index);
            break;
         case boxStates[1]:
            switchState(boxStates[2], index);
            break;
         case boxStates[2]:
            switchState(boxStates[0], index);
            break;
         default:
            alert('Something went wrong');
            break;
      }
   }

   const ticTacToe = gameState.map((state, index) => (
      <div
         key={index}
         className={state === boxStates[1] ? 'box box-x' : state === boxStates[2] ? 'box box-o' : 'box'}
         onClick={() => clickHandler(state, index)}
      >
         {state === boxStates[1] ? x : state === boxStates[2] ? o : null}
      </div>
   ));

   if (gameOver(gameState)) {
      console.log('Game over');
   }

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