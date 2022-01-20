import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App(){
    const [firstValue, setFirstValue] = useState("");
    const [secondValue, setSecondValue] = useState("");

    useEffect(()=> {
        console.log(`field 1: ${firstValue}`);
    },[firstValue]);

    useEffect(()=> {
        console.log(`field 2: ${secondValue}`);
    },[firstValue,secondValue]);

    return(
        <>
            <lable>
                Favourite Phrase:
                <input value={firstValue} onChange={e=> setFirstValue(e.target.value)}/>
            </lable>
            <br/>
            <lable>
                Second Favourite Phrase:
                <input value={secondValue} onChange={e=> setSecondValue(e.target.value)}/>
            </lable>
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
