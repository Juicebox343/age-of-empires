import React, { useState } from 'react';

const Search = () => {
  const [isSelected, setSelected] = useState('');

  return (
    <section className='search-filters'>
      <label>
        Search
        <input type='text' placeholder='Begin typing..'/>
        </label>
        <label>
          Maps
          <input
            name="filter"            
            type="radio"
            value='maps'
            checked={isSelected === 'maps'}
            onChange={e => setSelected(e.target.value)} />
        </label>
        <label>
          Civilizations
          <input
            name="filter"            
            type="radio"
            value='civs'
            checked={isSelected === 'civs'}
            onChange={e => setSelected(e.target.value)} />
        </label>
        <label>
          Units
          <input
            name="filter"            
            type="radio"
            value='units'
            checked={isSelected === 'units'}
            onChange={e => setSelected(e.target.value)} />
        </label>
    </section>
  )
}

  
 
export default Search;
