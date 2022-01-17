import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

let city = "Colombo";

let person = {
    name : "Methma",
    age : 22
}

ReactDOM.render(
    <div>
        <h1 id="header" className="cool-text">Hello from {city}</h1>
        <h4>Hi I'm {person.name}. I'm {person.age} years old</h4>
    </div>,
  document.getElementById('root')
);


reportWebVitals();
