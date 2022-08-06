import React, { useState } from 'react';
import './Box.css';
import { o } from './svgs';
import { x } from './svgs';

function Box() {
   const [boxState, setBoxState] = useState(null);
   const boxStates = ['X', 'O', null];

   function clickHandler() {
      switch (boxState) {
         case boxStates[0]:
            setBoxState(boxStates[1]);
            break;
         case boxStates[1]:
            setBoxState(boxStates[2]);
            break;
         case boxStates[2]:
            setBoxState(boxStates[0]);
            break;
      }
   }

   return (
      <div className={boxState === 'X' ? 'box box-x' : boxState === 'O' ? 'box box-o' : 'box'} onClick={clickHandler}>
         {boxState === 'X' ? x : boxState === 'O' ? o : null}
      </div>
   );
}

export default Box;