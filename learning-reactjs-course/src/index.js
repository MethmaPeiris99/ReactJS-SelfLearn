import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

function LoggedInMessage({name}){
    return(
        <div>
            <h1>Welcome {name} !</h1>
        </div>
    );
}

function SignOut(){
    return(
        <div>
            <h1>Thank you for using the app !</h1>
        </div>
    )
}

function App(){
    return(
        <>
            <LoggedInMessage name="Methma"/>
            <SignOut/>
        </>
    );
}

const[,,three] = ["Java","Python","HTML"];

// console.log(one);
// console.log(two);
console.log(three);

ReactDOM.render(
    <div>
        <App/>
    </div>,
  document.getElementById('root')
);

reportWebVitals();
