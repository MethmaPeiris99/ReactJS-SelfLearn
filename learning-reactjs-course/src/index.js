import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Checkbox(){
    const [checked, toggle] = useReducer(checked => !checked, false);

    return(
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
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
