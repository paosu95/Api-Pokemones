import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import SearchBar from '../searchBar/SearchBar';
import style from '../home/home.module.css';
import Paginado from '../paginado/Paginado';

export default function Home() {
  const dispatch = useDispatch();
  const allpokemons = useSelector((state) => state.pokemons); // Selecciona una parte del estado
  const types = useSelector((state) => state.types);

  //pide los pokemones haciendo dispatch de getPokemons
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]); //dependencias

  //filtrado
  const [orderBy, setOrderBy] = useState('asc');
  const [filterByType, setFilterByType] = useState('all');
  const [filterBySource, setFilterBySource] = useState('all');

  let pokemons = [...allpokemons];

  const isFromPokeApi = filterBySource === 'pokeapi';

  // filtrado combinado, siempre se hace de primeras
  if (filterByType !== 'all' && filterBySource !== 'all') {
    pokemons = pokemons.filter((pokemon) => {
      return (
        pokemon.Types.some((t) => t.id === Number(filterByType)) &&
        pokemon.fromPokeApi === isFromPokeApi
      );
    });
  } else if (filterByType !== 'all') {
    pokemons = pokemons.filter((pokemon) => {
      return pokemon.Types.some((t) => t.id === Number(filterByType));
    });
  } else if (filterBySource !== 'all') {
    pokemons = pokemons.filter((pokemon) => {
      return pokemon.fromPokeApi === isFromPokeApi;
    });
  }

  pokemons = pokemons.sort((a, b) => {
    if (orderBy === 'asc') {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }
    }

    if (orderBy === 'desc') {
      if (a.name < b.name) {
        return 1;
      }

      if (a.name > b.name) {
        return -1;
      }
    }

    if (orderBy === 'strongest') {
      if (a.attack < b.attack) {
        return 1;
      }

      if (a.attack > b.attack) {
        return -1;
      }
    }

    if (orderBy === 'weakest') {
      if (a.attack < b.attack) {
        return -1;
      }

      if (a.attack > b.attack) {
        return 1;
      }
    }

    return 0;
  });

  //paginado
  const [currentPage, setCurrentPage] = useState(1); //arranca en uno
  const [pokemonsPerPage] = useState(12); //12 pokemons por pagina

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  return (
    <div className={style.contenedorPadre}>
      <div>
        <SearchBar />
        <hr></hr>
      </div>

      <div className={style.filters}>
        <div>
          <p className={style.orderBy}>Order by</p>
          <select
            className={style.inputOrder}
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
          <p className={style.tittleFilterBy}>Filter by type</p>
          <select
            className={style.SelectType}
            title="Filter by type"
            value={filterByType}
            onChange={(e) => {
              setFilterByType(e.target.value);
              setCurrentPage(1);
            }}
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
          <p className={style.tittleFilterBySourse}>Filter by source</p>
          <select
            className={style.selectSource}
            title="Filter by source"
            value={filterBySource}
            onChange={(e) => {
              setFilterBySource(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">All</option>
            <option value="pokeapi">Pokeapi</option>
            <option value="database">Database</option>
          </select>
        </div>
      </div>

      <Paginado
        pokemonsPerPage={pokemonsPerPage}
        allpokemons={pokemons.length}
        paginado={setCurrentPage}
      />

      <div className={style.cards}>
        {pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon).map((p) => (
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
