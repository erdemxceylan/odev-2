import React from 'react';

function Box({ className, content, onClick }) {
   return <div className={className} onClick={onClick} >{content}</div>;
}

export default Box;