import classNames from 'classnames';
import React from 'react';
import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../actions/index';
import { validate } from './validate.js';
import { Link } from 'react-router-dom';
import style from '../createPokemon/createPokemon.module.css';
import internationalPokemon from './../../img/International_Pokémon_logo.svg.webp';
import pokeBola from './../../img/pokeBola.png';

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

    const inputsToValidate = [
      'name',
      'picture',
      'hp',
      'attack',
      'defense',
      'speed',
      'height',
      'weight',
    ];

    let canSubmit = true;

    for (let inputToValidate of inputsToValidate) {
      const isValid = validate(
        e.target.elements[inputToValidate],
        dispatchError,
      );

      if (!isValid) {
        canSubmit = false;
      }
    }

    if (canSubmit) {
      //dispatch de dos cosas: actions y thunks
      dispatch(postPokemon(input)); //en vez de mapdispatchtoprops
    }
  };

  const [errorState, dispatchError] = useReducer((state, action) => {
    return { ...state, [action.type]: action.value };
  }, {});

  const handleInputChange = (e) => {
    const { target } = e;

    let targetValue = target.value;

    if (target.name === 'name') {
      targetValue = targetValue.toLowerCase();
    }

    setInput({ ...input, [target.name]: targetValue });
    validate(target, dispatchError);
  };

  const handlecheck = (e) => {
    const types = [...input.types];

    if (e.target.checked) {
      // si esta seleccionado el checkbox
      types.push(e.target.value);
    } else {
      types.splice(types.indexOf(e.target.value), 1);
    }

    setInput({
      ...input,
      types,
    });
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
          <div className={style.group}>
            <label
              className={classNames(
                style.nombre,
                errorState.name && style.error,
              )}
            >
              Name:
              <input
                className={style.input}
                type="text"
                value={input.name}
                name="name"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.name && <p>{errorState.name}</p>}
            </label>
          </div>
          <div className={style.group}>
            <label
              className={classNames(
                style.nombre,
                errorState.picture && style.error,
              )}
            >
              Picture:
              <input
                className={style.input}
                type="text"
                value={input.picture}
                name="picture"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.picture && <p>{errorState.picture}</p>}
            </label>
          </div>
          <div className={style.group}>
            <label
              className={classNames(style.nombre, errorState.hp && style.error)}
            >
              Healtly:
              <input
                className={style.input}
                type="text"
                value={input.hp}
                name="hp"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.hp && <p>{errorState.hp}</p>}
            </label>
          </div>
          <div className={style.group}>
            <label
              className={classNames(
                style.nombre,
                errorState.attack && style.error,
              )}
            >
              Attack:
              <input
                className={style.input}
                type="text"
                value={input.attack}
                name="attack"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.attack && <p>{errorState.attack}</p>}
            </label>
          </div>
          <div className={style.group}>
            <label
              className={classNames(
                style.nombre,
                errorState.defense && style.error,
              )}
            >
              Defense:
              <input
                className={style.input}
                type="text"
                value={input.defense}
                name="defense"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.defense && <p>{errorState.defense}</p>}
            </label>
          </div>
          <div className={style.group}>
            <label
              className={classNames(
                style.nombre,
                errorState.speed && style.error,
              )}
            >
              Speed:
              <input
                className={style.input}
                type="text"
                value={input.speed}
                name="speed"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.speed && <p>{errorState.speed}</p>}
            </label>
          </div>
          <div className={style.group}>
            <label
              className={classNames(
                style.nombre,
                errorState.height && style.error,
              )}
            >
              Height:
              <input
                className={style.input}
                type="text"
                value={input.height}
                name="height"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.height && <p>{errorState.height}</p>}
            </label>
          </div>
          <div className={style.group}>
            <label
              className={classNames(
                style.nombre,
                errorState.weight && style.error,
              )}
            >
              Weight:
              <input
                className={style.input}
                type="text"
                value={input.weight}
                name="weight"
                onChange={handleInputChange}
                onBlur={(e) => validate(e.target, dispatchError)}
              />
              {errorState.weight && <p>{errorState.weight}</p>}
            </label>
          </div>
        </div>
        <div className={style.formularioTypes}>
          <h3 className={style.tituloTypes}>Select types</h3>
          <div className={style['layout-types']}>
            {types.map((t) => (
              <label key={t.id} className={style.types}>
                {t.name}
                <input type="checkbox" onChange={handlecheck} value={t.id} />
              </label>
            ))}
          </div>
          <button className={style.button} type="submit">
            Create
          </button>
          <img className={style.pokeBola} src={pokeBola} alt="pokebola" />
        </div>
      </form>
    </div>
  );
}
