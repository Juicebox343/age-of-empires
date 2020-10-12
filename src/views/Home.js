import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import Carousel from '../components/Carousel';

function Home(props){
 
    
    return(
        <main class='home'>
            <h2>Try one of these!</h2>
            <section>
                <h3>Maps</h3>
                <Carousel data={props.mapData} type='maps'/>
            </section>

            <section>
                <h3>Civilizations</h3>
                <Carousel data={props.civData} type='civs'/>
            </section>
        </main>
    )
}

export default Home;