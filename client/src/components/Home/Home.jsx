import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx'
import './Home.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="contenedor">
        <div className="titulo">
            <h1>Bienvenidos</h1>
        </div>
      </div>
    </>
  )
}
