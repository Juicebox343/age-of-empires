import React, { useState } from 'react';

import {Link } from "react-router-dom";


function Carousel(props){

    const [random] = useState(getSlideIndexes(props.data));

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
        <ul className='list'>
            {Object.keys(random).map(key => 
                <li className='result'>
                    <Link to={`/${props.type}/${random[key]}`}>
                        <img className='result-background' src={`images/${props.type}/${props.data[random[key]]['featured-image']}`} alt=''/>
                        <span className='title'>{props.data[random[key]].name}</span>
                        <div className='tool-tip'><span>{props.data[random[key]].description && props.data[random[key]].description.substring(0, 80).trim()}..<br/>[Read More]</span></div>
                    </Link>
                </li> 
                )}
                
        </ul>


    )
}

export default Carousel;
