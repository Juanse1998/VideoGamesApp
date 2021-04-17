import './App.css';

import React, {useState, useEffect} from "react";
import Home from "./components/Home/Home.jsx"
import VideoGames from "./components/VideoGames/VideoGames.jsx"
import {BrowserRouter, Route} from 'react-router-dom';
import AddGame from './components/AddGame/AddGame'
import Details from './components/Details/Details'
import SearchBar from './components/SearchBar/SearchBar'





function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addGame" component={AddGame} />
        <Route exact path="/videogames" component={VideoGames} />
        <Route exact path="/videogame/:id" component={Details} />
        <Route exact path="/searchGame/" component={SearchBar} />
        <Route exact path="/details" component={Details} />
    
      </BrowserRouter>
    </React.Fragment>
  );
}


export default App;
