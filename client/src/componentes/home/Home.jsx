import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import SearchBar from '../searchBar/SearchBar';
import style from '../home/home.module.css';
import internationalPokemon from '../../img/International_Pokémon_logo.svg.webp';

export default function Home() {
  const dispatch = useDispatch(); 
  const allpokemons = useSelector((state) => state.pokemons); // Selecciona una parte del estado
//pide los pokemones haciendo dispatch de getPokemons
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]); //dependencias

  function handleClick() {
    dispatch(getPokemons());
  }

  return (
    <div className={style.contenedorPadre}>
      <button
        type="button"
        className={style.allPokemons}
        onClick={handleClick}
      >
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

      <div>
        <SearchBar />
        <hr></hr>
      </div>

      <div className={style.cards}>
        {allpokemons.map((p) => (
          <Link className={style.link} key={p.id} to={`/home/${p.id}`}>
            <Card
              className={style.card}
              name={p.name}
              image={p.picture}
              types={p.Types}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
