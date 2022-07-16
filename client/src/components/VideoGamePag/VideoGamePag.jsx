import React, { useEffect, useState } from 'react';
import Videogame from '../Videogame/Videogame'
import {pagGames} from '../../services/games'
import axios from 'axios';
import NavBar from '../NavBar/NavBar'

export default function VideoGamesPag() {
  const [game, setGame] = useState([])
  const [previous, setPrevious] = useState("")
  const [next, setNext] = useState("")

  useEffect(async () => {
      const games = await pagGames()
      setGame(games.results);
      setPrevious(games.previous);
      setNext(games.next);
    }, [])

  async function nextPage() {
    await fetch(next)
      .then(r => r.json())
      .then((r) => {
        const {results, next, previous} = r;
        setGame(results);
        setNext(next)
        setPrevious(previous)
      })
  }

  async function Previous() {
    await fetch(previous)
          .then (r => r.json())
          .then((r) => {
            const {results, next, previous} = r;
            setGame(results);
            setNext(next)
            setPrevious(previous)
          })
  }

  {
    if(!game) {
        return "Loading.."
    }
  }

  return (
    <>
      <NavBar />
      <button onClick={Previous}>Anterior</button>
      <button onClick={nextPage}> Siguiente </button>
      <div className="cards">
        {
          game.map((game) => <Videogame
          genres={game.genres}
          name={game.name}
          img={game.background_image}
          id={game.id}
          />)
        }
      </div>
    </>
  );
}




