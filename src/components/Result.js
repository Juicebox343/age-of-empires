import React from 'react';

import { Link } from "react-router-dom";

function Result(props){ 
          
    return(
        <li className='result'>
            <Link to={`/${props.type}/${props.id}`}>
                <img className='result-background' src={`images/${props.type}/${props.data['featured-image']}`} alt=''/>
                <span className='title'>{props.data.name}</span>
            </Link>
        </li>
        
    )
}

export default Result;
