import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function GitHubUser({login}){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error)
    },[]);

    if(data){
        return (
            <div>
                {/*{JSON.stringify(data)};*/}
                <h1>{data.login}</h1>
                <img src={data.avatar_url} width={100}/>
            </div>
        );
    }
    return null;
}

function App(){
    return(
        <GitHubUser login="MethmaPeiris99"/>
    );
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
  document.getElementById('root')
);

reportWebVitals();
