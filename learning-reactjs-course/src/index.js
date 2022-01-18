import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

let city = "Colombo";

let person = {
    name : "Methma",
    age : 22
}

function Hello({library, message, number}){
    return (
        <div>
            <h1>Welcome to {library}!</h1>
            <p>{message}</p>
            <p>{number} props total</p>
        </div>
    );
}

ReactDOM.render(
    <div>
        <h1 id="header" className="cool-text">Hello from {city}</h1>
        <h4>Hi I'm {person.name}. I'm {person.age} years old</h4>
        <Hello library="React" message="Have fun" number={3}/>
    </div>,
  document.getElementById('root')
);


reportWebVitals();
