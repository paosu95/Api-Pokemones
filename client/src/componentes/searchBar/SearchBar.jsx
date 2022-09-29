import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons, getPokemons } from '../../actions/index';
import style from './searchBar.module.css';

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

  return (
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
  );
}
