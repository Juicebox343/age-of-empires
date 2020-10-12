import React, { useState } from 'react';

import Result from './Result';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


function Carousel(props){

    const [random, setRandom] = useState(getSlideIndexes(props.data));

    function getSlideIndexes(data){
        let myArray = Object.keys(data);
        for(let i = myArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = parseInt(myArray[i])
            myArray[i] = parseInt(myArray[j])
            myArray[j] = temp
          }
        let shortList = myArray.slice(0,5)
        return shortList
    }

    return(
        <div className='list'>
                {Object.keys(random).map(key => 
                         <div className='result'>
                         <Link to={`/${props.type}/${random[key]}`}>
                             <img className='result-background' src={`images/${props.type}/${props.data[random[key]]['featured-image']}`}/>
                             <span className='title'>{props.data[random[key]].name}</span>
                             {/* <div className='tool-tip'><span>{props.data[random[2]].description && props.data[random[0]].description.substring(0, 80).trim()}..<br/> Select to Read More</span></div> */}
                         </Link>
                     </div> 
                    )}
            </div>


    )
}

export default Carousel;
