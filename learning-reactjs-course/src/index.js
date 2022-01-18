import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

const listOfFrameworks = ["React","Angular","Springboot"]

function App({frameworks}){
    return(
      <ul>
          {frameworks.map(framework =>(
              <li>{framework}</li>
          ))}
      </ul>
    );
}

ReactDOM.render(
    <div>
        <App frameworks={listOfFrameworks}/>
    </div>,
  document.getElementById('root')
);


reportWebVitals();
