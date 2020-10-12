import React from 'react';
import { Link } from "react-router-dom";

function CivResults(props){
          
    return(
        <li><Link to={`/civs/${props.id}`}><img className='result-background' src={`images/civs/${props.data['featured-image']}`} alt=''/><span className='civ-title'>{props.data.name}</span></Link></li>
        
    )
}

export default CivResults;
