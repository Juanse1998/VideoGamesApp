import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {getAllGames} from '../../services/games'
import Videogame from '../Videogame/Videogame'
import './VideoGames.css'
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar'

export default function VideoGames() {
  const [game, setGame] = useState([])

  const [previous, setPrevious] = useState("")
  const [next, setNext] = useState("")

  useEffect(async () => {
    const games = await getAllGames()
    setGame(games);
    setNext(games[0].next)
    setPrevious(games[0].previous)
  }, [])

  async function nextPage() {
    await fetch(next)
       .then (r => r.json())
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


  async function ordRating() {
    const aux = [];
    const games = await getAllGames()
    games.map((game) => {
      aux.push(game)
    })
    aux.sort((a,b) => a.rating - b.rating);
    setGame(aux)
  }

  async function ordAlfaAsc() {
    const aux = [];
    const games = await getAllGames()
    games.map((game) => {
      aux.push(game)
    })
    aux.sort((a,b) => {
      if(a.name > b.name) {
        return 1;
      }
      if(a.name < b.name){
        return -1;
      }
      return 0;
    });
    setGame(aux)
  }

  async function ordAlfaDesc() {
    const aux = [];
    const games = await getAllGames()
    games.map((game) => {
      aux.push(game)
    })
    aux.sort((a,b) => {
      if(a.name < b.name) {
        return 1;
      }
      if(a.name < b.name){
        return -1;
      }
      return 0;
    });
    setGame(aux)
  }
    // {
    //   if (!this.props.game) {
    //     return "Loading..."
    //   }
    // }
    return (
    <>
      <NavBar/>
        <div className="todo">
            <div className="contengotodo">
            <div className="videojuegos">
              <div className="checkes">
                <div className="checks">
                  <div className="contCheck">
                    <input type="checkbox" name="rating" onClick={ordRating}/>
                    <a className="textFilter">Rating</a>
                  </div>
                  <div className="contCheck">
                    <input type="checkbox" name="asce" onClick={ordAlfaAsc}/>
                    <a className="textFilter">Ascendente</a>
                  </div>
                  <div className="contCheck">
                    <input type="checkbox" name="desc" onClick={ordAlfaDesc}/>
                    <a className="textFilter">Descendente</a>
                  </div>
                </div>
              </div>
              <div className="buscador">
                <SearchBar />
              </div>
            </div>
            <div className="botones">
                  <div className="anterior">
                    <p><button className="buttons" onClick={Previous}>Anterior</button></p>
                  </div>
                  <div className="anterior">
                    <p><button className="buttons" onClick={nextPage}>Siguiente</button></p>
                  </div>
                </div>

            </div>
          </div>

          <div className="cards">

          {
            game.map((game) => <Videogame
            genres={game.genres}
            name={game.name}
            rating={game.rating}
            platforms={game.platforms}
            img={game.background_image}
            id={game.id}
            />)
          }
        </div>
      </>
    );
}


