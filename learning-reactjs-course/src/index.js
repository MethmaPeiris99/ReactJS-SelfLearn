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

ReactDOM.render(
    <div>
        <App/>
    </div>,
  document.getElementById('root')
);

reportWebVitals();
