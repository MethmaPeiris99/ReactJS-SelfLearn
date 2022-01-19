import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Checkbox(){
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        alert(`checked: ${checked.toString()}`);
    });

    return(
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={() => setChecked(checked => !checked)}
            />
            {checked ? "Checked" : "Not checked"}
        </>
    );
}

ReactDOM.render(
    <div>
        <Checkbox/>
    </div>,
  document.getElementById('root')
);

reportWebVitals();
