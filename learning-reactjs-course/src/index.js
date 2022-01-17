import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement("div", {style:{color:'blue'}}, React.createElement("h1",null, "Hi")),
  document.getElementById('root')
);


reportWebVitals();
