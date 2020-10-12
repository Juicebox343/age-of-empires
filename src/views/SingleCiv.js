import React from 'react';

function SingleCiv(props){
    // let { id } = useParams();

    const civData = props.civData

    return (
      <main className='show-page'>
        <h3>The {civData.name}</h3>
        <img src={`/images/civs/${civData['featured-image']}`} alt={civData.name} />
        <div className='civ-details'>
        <p className='description'>{civData.description}</p>
        <h4>Civilization Bonus</h4>
        <ul>
          {Object.keys(civData['civ-bonus']).map(element => 
            <li>{civData['civ-bonus'][element]}</li>
          )}
        </ul>
        
        <h4>Unique Unit</h4>
        <ul>
          {Object.keys(civData['unique-unit']).map(element => 
            <li>{civData['unique-unit'][element]}</li>
          )}
        </ul>

        <h4>Unique Technologies</h4>
        <ul>
          {Object.keys(civData['unique-tech']).map(element => 
            <li>{civData['unique-tech'][element]}</li>
          )}
        </ul>
        
        <h4>Team Bonus</h4>
        <ul>
          {Object.keys(civData['team-bonus']).map(element => 
            <li>{civData['team-bonus'][element]}</li>
          )}
        </ul>

        <h4>Wonder</h4>
        <ul>
          {Object.keys(civData['wonder']).map(element => 
            <li>{civData['wonder'][element]}</li>
          )}
        </ul>

        
        
        
        </div>
        


      </main>
    );
}

export default SingleCiv;

