const initialState = {
  pokemons: [],
  pokemon: {},
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };

    case 'GET_NAME_POKEMONS':
      return {
        ...state,
        pokemons: [action.payload],
      };

    case 'GET_TYPES':
      return {
        ...state,
        types: action.payload,
      };

    case 'GET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };

    case 'POST_POKEMON':
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),
      };

    case 'DELETE_POKEMON':
      return {
        ...state,
        pokemons: state.pokemons.filter((p) => p.id !== action.payload),
      };

    default:
      return state;
  }
}

export default rootReducer;
