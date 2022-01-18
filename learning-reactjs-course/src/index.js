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

function App(props){
    return(
        <div>
            {(props.message === "logged") ?
                <LoggedInMessage name="Methma"/>
                : props.message === "signOut" ?
                <SignOut/> :
                  <h1>User not recognized !</h1>
            }
        </div>
    );
}

ReactDOM.render(
    <div>
        <App message="jbjb"/>
    </div>,
  document.getElementById('root')
);

reportWebVitals();
