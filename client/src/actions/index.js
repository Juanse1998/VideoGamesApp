import axios from "axios";

export function getGames() {
    return function(dispatch) {
      return fetch("/videogames")
        .then(response =>response.json())
        .then(json => {
          dispatch({ type: "GET_GAMES", payload: json });
        });
    };
  }
  
  
export function getGameDetail(id) {
    return function(dispatch) {
      return fetch(`/videogame/`+ id)
        .then(response => response)
        .then(json => {
          dispatch({ type: "GET_GAME_DETAIL", payload: json });
        });
    };
  }

export function filtGames(name) {
    return function(dispatch) {
      return axios.get(`/videogames?name=`+ name)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "FILT_GAMES", payload: json });
        });
    };
  }

  

  



