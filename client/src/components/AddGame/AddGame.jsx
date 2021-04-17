import React, { useState, useEffect } from 'react';
import './AddGame.css'
import axios from 'axios';
import NavBar from '../NavBar/NavBar'

class AddGame extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          description: '',
          released: '',
          genres: '',
          platforms: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }
  
    async handleSubmit(event) {
        const datos = {
            name: this.state.name,
            description: this.state.description,
            released: this.state.released,
            platforms: this.state.platforms,
            genres: this.state.genres,
        
        }
        event.preventDefault();
        axios.post(`/addGame`, datos)
          .then(res =>  res)
      
    }
    render() {
   
    const { name, description, released, genres, platforms} = this.state
      return (
          <>
            <NavBar/>
            <div className="contenedor">
            <form className="inputs" onSubmit={this.handleSubmit}>  
              <div className="name">
                <b>Name:</b> 
                <input type="text" name="name" value={name} onChange={this.handleChange} />
              </div>
              <div className="description">
                <b> Descripcion:</b> 
                <input type="text" name="description" value={description} onChange={this.handleChange} />
              </div>
              <div className="fecha">
                <b> Fecha Lanzamiento: </b> 
                <input type="text" name="released" value={released} onChange={this.handleChange} />
              </div>
              <div className="genero">
                <b> Genero: </b> 
                <input type="text"  name="genres" value={genres} onChange={this.handleChange} />
              </div>
              <div className="plataformas">
                <b> plataformas: </b>
                <input type="text"  name="platforms" value={platforms} onChange={this.handleChange} />
              </div>
              <div className="bttn">
                <button type="submit"> Agregar </button>  
              </div>
             </form>
            </div>
            
          </>
      );
    }
  }
  export default AddGame