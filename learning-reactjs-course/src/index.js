import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

let city = "Colombo";

let person = {
    name : "Methma",
    age : 22
}

function Hello(){
    return <h1>Welcome to React !</h1>;
}

ReactDOM.render(
    <div>
        <h1 id="header" className="cool-text">Hello from {city}</h1>
        <h4>Hi I'm {person.name}. I'm {person.age} years old</h4>
        <Hello/>
    </div>,
  document.getElementById('root')
);


reportWebVitals();
