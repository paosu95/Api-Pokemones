import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons, getPokemons } from '../../actions/index';
import style from './searchBar.module.css';
import { Link } from 'react-router-dom';
import internationalPokemon from '../../img/International_Pokémon_logo.svg.webp';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch(getNamePokemons(name)); //estado local name
    } else {
      dispatch(getPokemons());
    }
  }

  function handleClick() {
    dispatch(getPokemons());
  }

  return (
    <div>
      <Link to='/' className={style.landing}>
        Landing
      </Link>
      <button type="button" className={style.allPokemons} onClick={handleClick}>
        All pokemons
      </button>
      <Link className={style.createPokemon} to="/pokemon">
        Create Pokemon
      </Link>

      <img
        className={style.logo_pokemon}
        src={internationalPokemon}
        alt="international_pokemon"
      />
      <form className={style.padreInput} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          placeholder="search"
          onChange={handleInputChange}
        />
        <button className={style.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
