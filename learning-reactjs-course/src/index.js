import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

const listOfNumbers = [1, 2, 3, 4];

function App({numbers}){
    return(
      <ul>
          {numbers.map((number, i) =>(
              <li key={i}>{number}</li>
          ))}
      </ul>
    );
}

ReactDOM.render(
    <div>
        <App numbers={listOfNumbers}/>
    </div>,
  document.getElementById('root')
);

reportWebVitals();
