import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/maps">Maps</NavLink></li>
                <li><NavLink to="/civs">Civilizations</NavLink></li>
            </ul>
        </nav>
    )
}


export default Nav;