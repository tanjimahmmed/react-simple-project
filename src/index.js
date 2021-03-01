import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date(2021, 3, 1, 19);
currDate = currDate.getHours();
let greeting = '';
const cssStyle = {};

if(currDate > 1 && currDate < 12){
    greeting = 'Good Morning';
    cssStyle.color = '#00b894';
}else if(currDate >= 12 && currDate < 20){
    greeting = 'Good Afternoon';
    cssStyle.color = 'orange';
}else if(currDate >= 20 && currDate <= 24) {
    greeting = 'Good Night';
    cssStyle.color = 'black';
}

ReactDOM.render(
    <>
    <h1>Hello sir, <span style={cssStyle}>{greeting}</span> </h1>
    </>,

    document.getElementById('root')
);

