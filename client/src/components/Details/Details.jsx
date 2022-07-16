import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {gameDb} from '../../services/games'
import {detailsGame} from '../../services/games'

import './Details.css'

export default function Details()  {
  const [game, setGame] = useState(null)
  const [gamedb, setGamedb] = useState(null)
  const games = [];
  const {id} = useParams();

  useEffect(async ()  => {
    fetch(`/videogame/${id}`)
        .then(response =>
          { console.log(response)
            response.json()})
        .then((data) => setGame({...data}));
    const a = gameDb();
    setGamedb(a)
  }, []);

  {
    if(!game) {
      return "Loading..."
    }
  }
  {

  }
  return (
    <section className="videogames-container">
      <div className="details">
        <div className="fechaLanz">
            { <a> fecha lanzamiento: {game[0].released} </a> }
        </div>
        <div className="rating">
            <a> rating: {game[0].rating} </a>
        </div>
        <div className="plataformas">
            <a> plataformas: {game[0].platforms.toString()} </a>
        </div>
        <div className="description">
          <a> descripcion: {game[0].description} </a>
        </div>
    </div>
  </section>
  )
}

// function mapStateToProps(state) {
//   return {
//     game: state.game
//   };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//       getGameDetail: id => dispatch(getGameDetail(id))
//     };
//   }

