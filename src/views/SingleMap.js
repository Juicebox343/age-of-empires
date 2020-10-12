import React from 'react';

function SingleMap(props){
    // let { id } = useParams();

    const mapData = props.mapData;

    return (
      <main className='show-page'>
        <h3>{mapData.name}</h3>
        <img src={`/images/maps/${mapData['featured-image']}`} alt={mapData.name}/>
        <p>{mapData.description}</p>
      </main>
    );
}

export default SingleMap;

