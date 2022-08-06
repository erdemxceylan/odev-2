import React from 'react';
import './App.css';
import Box from './components/Box';
import { header } from './components/svgs';

function App() {
   return (
      <div className='container'>
         <div className='header'>
            {header}
            </div>
         <div className='line'>
            <Box />
            <Box />
            <Box />
         </div>
         <div className='line'>
            <Box />
            <Box />
            <Box />
         </div>
         <div className='line'>
            <Box />
            <Box />
            <Box />
         </div>
      </div>
   );
}

export default App;
