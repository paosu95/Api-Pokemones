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
      case 'LIMPIAR_ESTADO':
        return {
          ...state,
          pokemon: {}

        }

    

    default:
      return state;
  }
}

export default rootReducer;
