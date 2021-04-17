import React from 'react';

import './NavBar.css';


import VideoGames from '../VideoGames/VideoGames';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <div className="lista">
                    
                        <p> <NavLink exact to="/" > Home </NavLink> </p>
                        <p> <NavLink exact to="/videoGames" > Videogames </NavLink> </p>
                        <p> <NavLink exact to="/addGame"> Add Game </NavLink> </p>
                    
                </div>
            </nav>
        </header>
    )
}