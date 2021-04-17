const initialState = {
    games: [],
    gameLoaded: [],
    gameDetail: {}
  };


function rootReducer(state = initialState, action) {
  if (action.type === "ADD_GAME") {
      return {
        ...state,
        games: state.games.concat(action.payload)
      }
  }
  if (action.type === "FILT_GAME") {
    return {
      ...state,
      gameLoaded: state.games.filter(game => game.name == action.payload)
    }
}
  if (action.type === "GET_GAMES") {
      return {
        ...state,
        games: action.payload
      };
  }

  if (action.type === "GET_GAME_DETAIL") {
      return {
          ...state,
          game: action.payload
      }
  } 
  return state;
}
  
  export default rootReducer;