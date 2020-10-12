import React from 'react';

import { Link } from "react-router-dom";

function Result(props){ 
          
    return(
        <li className='result'>
            <Link to={`/${props.type}/${props.id}`}>
                <img className='result-background' src={`images/${props.type}/${props.data['featured-image']}`} alt=''/>
                <span className='title'>{props.data.name}</span>
                {/* <div className='tool-tip'><span>{props.data.description && props.data.description.substring(0, 80).trim()}..<br/> Select to Read More</span></div> */}
            </Link>
        </li>
        
    )
}

export default Result;
