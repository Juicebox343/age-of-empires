import React from 'react';
import Carousel from '../components/Carousel';
import {Link } from "react-router-dom";

function Home(props){
    
    return(
        <main class='home'>
            <section className='maps'>
                <h3>Some Random Maps</h3>
                <Carousel data={props.mapData} type='maps'/>
                <Link to={'/maps'}>Some more</Link>
            </section>

            <section className='civilizations'>
                <h3>Some Random Civilizations</h3>
                <Carousel data={props.civData} type='civs'/>
                <Link to={'/civs'}>Some more</Link>
            </section>
        </main>
    )
}

export default Home;