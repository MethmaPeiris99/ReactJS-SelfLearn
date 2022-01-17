import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement("div", {style:{color:'blue'}},
      React.createElement("li",null, "Hot Dogs"),
      React.createElement("li",null, "Hamburgers"),
      React.createElement("li",null, "Pizza"),
      React.createElement("li",null, "Pasta")),
  document.getElementById('root')
);


reportWebVitals();
