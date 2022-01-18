import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

let city = "Colombo";

let person = {
    name : "Methma",
    age : 22
}

function App(){
    return(<div>
        <Hello library="React" message="Have fun"/>
        <Hello library="Angular" message="Have fun"/>
        <Hello library="Springboot" message="Have fun"/>
    </div>);
}
function Hello({library, message}){
    return (
        <div>
            <h1>Welcome to {library}!</h1>
            <p>{message}</p>
        </div>
    );
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
  document.getElementById('root')
);


reportWebVitals();
