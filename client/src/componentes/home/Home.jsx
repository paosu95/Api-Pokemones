import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import SearchBar from '../searchBar/SearchBar';
import style from '../home/home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const allpokemons = useSelector((state) => state.pokemons); // Selecciona una parte del estado
  const types = useSelector((state) => state.types);

  const [orderBy, setOrderBy] = useState('asc');
  const [filterByType, setFilterByType] = useState('all');
  const [filterBySource, setFilterBySource] = useState('all');

  const pokemons = allpokemons.filter((pokemon) => {
    if (filterByType !== 'all' && filterBySource !== 'all') {
      if (filterBySource === 'pokeapi') {
        return (
          pokemon.Types.some((t) => t.id === Number(filterByType)) &&
          pokemon.fromPokeApi
        );
      } else {
        return (
          pokemon.Types.some((t) => t.id === Number(filterByType)) &&
          !pokemon.fromPokeApi
        );
      }
    } else if (filterByType !== 'all') {
      return pokemon.Types.some((t) => t.id === Number(filterByType));
    } else if (filterBySource !== 'all') {
      if (filterBySource === 'pokeapi') {
        return pokemon.fromPokeApi;
      } else {
        return !pokemon.fromPokeApi;
      }
    } else {
      return true;
    }
  });

  //pide los pokemones haciendo dispatch de getPokemons
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]); //dependencias

  return (
    <div className={style.contenedorPadre}>
      <div>
        <SearchBar />
        <hr></hr>
      </div>

      <div className={style.filters}>
        <div className={style.orderBy}>
          <p>Order by</p>
          <select
            title="Order by"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <optgroup label="Name">
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </optgroup>
            <optgroup label="Attack">
              <option value="strongest">Strongest</option>
              <option value="weakest">Weakest</option>
            </optgroup>
          </select>
        </div>

        <div className={style.filterByType}>
          <p>Filter by type</p>
          <select
            title="Filter by type"
            value={filterByType}
            onChange={(e) => setFilterByType(e.target.value)}
          >
            <option value="all">All</option>
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Filter by source</p>
          <select
            title="Filter by source"
            value={filterBySource}
            onChange={(e) => setFilterBySource(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pokeapi">Pokeapi</option>
            <option value="database">Database</option>
          </select>
        </div>
      </div>

      <div className={style.cards}>
        {pokemons.map((p) => (
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
