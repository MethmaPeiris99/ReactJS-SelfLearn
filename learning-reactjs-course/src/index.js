import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App(){
    const [status, setStatus] = useState("Open");
    const [manager, setManager] = useState("Jon Snow");
    const [year, setYear] = useState(2021);

    return(
        <>
            <div>
                <h1>Status: {status}</h1>
                <button
                    onClick={() => setStatus("Open")}>
                    Open
                </button>
                <button
                    onClick={() => setStatus("Closed")}>
                    Closed
                </button>
                <button
                    onClick={() => setStatus("Back in 5 minutes")}>
                    Break
                </button>
            </div>
            <div>
                <h1>Manager on duty: {manager}</h1>
                <button
                    onClick={()=> setManager("Sansa Stark")}>
                    New Manager
                </button>
            </div>

            <div>
                <h3>Year: {year}</h3>
                <button
                    onClick={() => setYear(year+1)}>
                    New Year !
                </button>
            </div>
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
