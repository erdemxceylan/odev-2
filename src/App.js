import React, { useState } from 'react';
import { header } from './components/svgs';
import { x } from './components/svgs';
import { o } from './components/svgs';
import Box from './components/Box';
import './App.css';

function App() {
   const boxStates = [null, 'X', 'O'];
   const initialState = [];

   for (let i = 0; i < 9; i++) {
      initialState.push(boxStates[0]);
   }

   const [gameState, setGameState] = useState({ states: initialState });

   const switchState = (newState, index) => setGameState(currentState => {
      currentState.states[index] = newState;
      return { states: currentState.states };
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

   const ticTacToe = gameState.states.map((state, index) => {
      const className = state === boxStates[1] ? 'box box-x' : state === boxStates[2] ? 'box box-o' : 'box';
      const content = state === boxStates[1] ? x : state === boxStates[2] ? o : null;
      return (
         <Box
            key={index}
            className={className}
            content={content}
            onClick={() => clickHandler(state, index)}
         />
      );
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

export default App;
