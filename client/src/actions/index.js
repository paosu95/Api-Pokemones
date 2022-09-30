import axios from 'axios';

export function getPokemons() {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:4000/pokemons');
    return dispatch({
      type: 'GET_POKEMONS',
      payload: response.data,
    });
  };
}

export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        'http://localhost:4000/pokemons?name=' + name,
      );
      return dispatch({
        type: 'GET_NAME_POKEMONS',
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data.error);
      console.log(error);
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    const info = await axios.get('http://localhost:4000/types', {});
    return dispatch({
      type: 'GET_TYPES',
      payload: info.data,
    });
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      'http://localhost:4000/pokemons',
      payload,
    );
    return dispatch({
      type: 'POST_POKEMON',
      payload: response.data,
    });
  };
}

export function getPokemon(id) {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:4000/pokemons/' + id);
    return dispatch({
      type: 'GET_POKEMON',
      payload: response.data,
    });
  };
}
