const dealReducer = (state, action) => {
  switch (action.type) {
    case 'GET_GAME':
      return {
        ...state,
        game: action.payload,
        loading: false,
      }
    case 'GET_GAMES':
      return {
        ...state,
        games: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'CLEAR_GAMES':
      return {
        ...state,
        games: [],
        game: [],
      }
    case 'SET_ALERT':
      return {
        ...state,
        alertState: action.payload,
        loading: false,
      }
    case 'CLEAR_ALERT':
      return {
        ...state,
        alertState: null,
      }
    default:
      return state
  }
}

export default dealReducer
