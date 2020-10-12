import React from 'react';

function SingleCiv(props){
    // let { id } = useParams();

    const civData = props.civData

    return (
      <main className='show-page'>
        <h3>The {civData.name}</h3>
        <img src={`/images/civs/${civData['featured-image']}`} alt={civData.name} />
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

