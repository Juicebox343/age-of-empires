import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import Result from '../components/Result';



function ResultIndex(props){

        
    return(
        <main>
            {props.type === "civs" ? <h2>Civilizations</h2> : <h2>Maps</h2>}  
            <ul className='list'>
                {Object.keys(props.data).map(key => 
                    <Result key={key} id={key} data={props.data[key]} type={props.type} />
                )}
            </ul>
        </main>
    )
}

export default ResultIndex;
