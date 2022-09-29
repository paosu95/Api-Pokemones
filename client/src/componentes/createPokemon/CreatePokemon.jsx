import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../actions/index';
import { Link } from 'react-router-dom';
import style from '../createPokemon/createPokemon.module.css';
import internationalPokemon from './../../img/International_Pokémon_logo.svg.webp';

export default function CreatePokemon() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [input, setInput] = React.useState({
    name: '',
    picture: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input)); //en vez de mapdispatchtoprops
  };
  return (
    <div className={style.padreCreate}>
      <Link className={style.devolver} to="/home">
        Return to home
      </Link>
      <h1 className={style.createPokemon}>Create Pokemon</h1>
      <div className={style.imagen}>
        <img
          className={style.logoPokemon}
          src={internationalPokemon}
          alt="bola"
        />
      </div>
      <form className={style.formulario} onSubmit={handleFormSubmit}>
        <div className={style.primerFormulario}>
          <label className={style.nombre}>Name </label>
          <input
            className={style.input}
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
          <label className={style.nombre}>Picture </label>
          <input
            className={style.input}
            type="text"
            value={input.picture}
            name="image"
            onChange={(e) => setInput({ ...input, picture: e.target.value })}
          />
          <label className={style.nombre}>Hp</label>
          <input
            className={style.input}
            type="text"
            value={input.hp}
            name="hp"
            onChange={(e) => setInput({ ...input, hp: e.target.value })}
          />
          <label className={style.nombre}>Attack </label>
          <input
            className={style.input}
            type="text"
            value={input.attack}
            name="attack"
            onChange={(e) => setInput({ ...input, attack: e.target.value })}
          />
          <label className={style.nombre}>Defense </label>
          <input
            className={style.input}
            type="text"
            value={input.defense}
            name="defense"
            onChange={(e) => setInput({ ...input, defense: e.target.value })}
          />
          <label className={style.nombre}>Speed </label>
          <input
            className={style.input}
            type="text"
            value={input.speed}
            name="speed"
            onChange={(e) => setInput({ ...input, speed: e.target.value })}
          />{' '}
          <label className={style.nombre}>Height </label>
          <input
            className={style.input}
            type="text"
            value={input.height}
            name="heigth"
            onChange={(e) => setInput({ ...input, height: e.target.value })}
          />
          <label className={style.nombre}>Weight </label>
          <input
            className={style.input}
            type="text"
            value={input.weight}
            name="weight"
            onChange={(e) => setInput({ ...input, weight: e.target.value })}
          />
        </div>
        <div className={style.formularioTypes}>
          <h3 className={style.tituloTypes}>Select types</h3>
          {types.map((t) => (
            <div className={style.types}>
              <input type="checkbox" /> {t.name}
            </div>
          ))}
        </div>

        <button className={style.button} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
