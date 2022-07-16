import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './SearchBar.css';
import Videogame from '../Videogame/Videogame'
import {filtGames} from '../../services/games'

export default function SearchBar()  {
  const [game, setGame] = useState([])
  const [title, setTitle] = useState("")

  function handleChange(e) {
    setTitle( e.target.value );
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const games = await filtGames(title)
    setGame(games);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="title">Juego:</label>
        <input
          className="inputSearch"
          type="text"
          id="title"
          autoComplete="off"
          value={title}
          onChange={handleChange}
        />
        <button className="button" type="submit">BUSCAR</button>
      </form>
        {
          game.map((game) => <Videogame
          genres={game.genres}
          name={game.name}
          img={game.background_image}
          id={game.id}
          />)
      }
    </div>
  );
}



