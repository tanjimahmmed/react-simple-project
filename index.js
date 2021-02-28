import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let curDate = new Date(2021, 2, 28, 12);
curDate = curDate.getHours();
let greeting = '';
let cssStyle = {};

if(curDate >= 1 && curDate <12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
}else if(curDate >= 12 && curDate < 19) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'Orange';
}else {
    greeting = 'Good Night';
    cssStyle.color = 'Black';
}

ReactDOM.render(

   <>
    <h1>Hello Tanjim <span style={cssStyle}>{greeting}</span> </h1>
    
   </>,

document.getElementById('root'));