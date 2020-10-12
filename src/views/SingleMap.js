import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


function SingleMap(props){
    // let { id } = useParams();

    const mapData = props.mapData;

    return (
      <main className='show-page'>
        <h3>{mapData.name}</h3>
        <img src={`/images/maps/${mapData['featured-image']}`}/>
        <p>{mapData.description}</p>


      </main>
    );
}

export default SingleMap;

