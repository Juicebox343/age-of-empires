import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


function SingleCiv(props){
    // let { id } = useParams();

    const civData = props.civData

    return (
      <main className='show-page'>
        <h3>The {civData.name}</h3>
        <img src={`/images/civs/${civData['featured-image']}`}/>
        <div className='civ-details'>
        <p>{civData.description}</p>
        <p>{civData['civ-bonus']}</p>
        <p>{civData['unique-unit']}</p>
        <p>{civData['unique-tech']}</p>
        <p>{civData['team-bonus']}</p>
        </div>
        


      </main>
    );
}

export default SingleCiv;

