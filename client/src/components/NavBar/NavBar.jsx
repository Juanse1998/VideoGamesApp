import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <div className="lista">
          <p> <NavLink exact to="/" >Inicio</NavLink> </p>
          <p> <NavLink exact to="/videoGames">Videojuegos</NavLink> </p>
          <p> <NavLink exact to="/addGame">Agregar juego</NavLink> </p>
        </div>
      </nav>
    </header>
  )
}
