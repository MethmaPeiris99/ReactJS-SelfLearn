import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

const listOfFrameworks = [
    {id: "1", name: "React", version: 4.5},
    {id: "2", name: "Angular", version: 5.7},
    {id: "3", name: "Springboot", version: 9.0}
];

function App({frameworks}){
    return(
      <ul>
          {frameworks.map(framework =>(
              <div>
                  <h2>{framework.name}</h2>
                  <h4>Version: {framework.version}</h4>
              </div>
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
