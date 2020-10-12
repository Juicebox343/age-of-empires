import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Home from './views/Home';

import ResultIndex from './views/ResultIndex';
import SingleMap from './views/SingleMap';

import SingleCiv from './views/SingleCiv'; 

const mapData = require('./data/maps.json')
const civData = require('./data/civs.json');

function App() {
  
  const [maps] = useState(mapData);
  const [civs] = useState(civData);

  return (
    <div className='App'>
    <Header/>
      <Switch>
        <Route exact path='/' render={(props) => (<Home {...props} mapData={maps} civData={civs} /> )}/>
        <Route exact path ='/maps' render={(props) => (<ResultIndex {...props} data={maps} type={'maps'} /> )}/>
        <Route path ='/maps/:id' render={ ({match}) => {
            const map = maps[match.params.id];
            return <SingleMap mapData={map} /> 
          }}
        />   
        <Route exact path ='/civs' render={(props) => (<ResultIndex {...props} data={civs} type={'civs'} /> )}/>   
        <Route path ='/civs/:id' render={ ({match}) => {
            const civ = civs[match.params.id];
            return <SingleCiv civData={civ} /> 
          }}
        />  
      </Switch>
    </div>

  );
}


export default App;

