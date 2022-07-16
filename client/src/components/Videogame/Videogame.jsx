import React from 'react';
import './Videogame.css'
import Details from '../Details/Details'
import { Link } from 'react-router-dom';



export default function Videogame ({id, genres, name, img }) {
  const generos = [];
  const auxgeneros = "";
  // {
  //   if(!name) {
  //     return "Loading..."
  //   }
  // }
    return (
      <>
      {genres.forEach(elem => generos.push(elem.name))}

      <div className="card">
        <div className="card-body" >
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div>
              Generos:
              <div className="genero">
                {generos.toString()}
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img src={img} width="140" height="100" alt="" />
            </div>
             <div className="desplegable">
              <div className="links">
              <Link className="buttonDetail" to={`/videogame/${id}`}>Detalles</Link>
              {/* < Details id={id}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};
