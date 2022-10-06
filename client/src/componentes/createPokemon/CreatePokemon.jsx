import React from 'react';
// import {useHistory} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../actions/index';
import { Link } from 'react-router-dom';
import style from '../createPokemon/createPokemon.module.css';
import internationalPokemon from './../../img/International_Pokémon_logo.svg.webp';
import pokeBola from './../../img/pokeBola.png'

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
    //dispatch de dos cosas: actions y thunks
    dispatch(postPokemon(input)); //en vez de mapdispatchtoprops
    //  
  };

  const handlecheck = (e) => {
    const types = [...input.types];

    if (e.target.checked) {
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
            <label className={style.nombre}>
              Name:
              <input
                className={style.input}
                type="text"
                value={input.name}
                name="name"
                required
                onChange={(e) =>
                  setInput({ ...input, name: e.target.value.toLowerCase() })
                }
              />
            </label>
          </div>
          <div className={style.group}>
            <label className={style.nombre}>
              Picture:
              <input
                className={style.input}
                type="text"
                value={input.picture}
                name="image"
                required
                onChange={(e) =>
                  setInput({ ...input, picture: e.target.value })
                }
              />
            </label>
          </div>
          <div className={style.group}>
            <label className={style.nombre}>
              Healtly:
              <input
                className={style.input}
                type="number"
                value={input.hp}
                name="hp"
                min="1"
                pattern="^[1-9]+"
                required
                onChange={(e) => setInput({ ...input, hp: e.target.value })}
              />
            </label>
          </div>
          <div className={style.group}>
            <label className={style.nombre}>
              Attack:
              <input
                className={style.input}
                type="number"
                value={input.attack}
                name="attack"
                min="1"
                pattern="^[1-9]+"
                required
                onChange={(e) => setInput({ ...input, attack: e.target.value })}
              />
            </label>
          </div>
          <div className={style.group}>
            <label className={style.nombre}>
              Defense:
              <input
                className={style.input}
                type="number"
                value={input.defense}
                name="defense"
                min="1"
                pattern="^[1-9]+"
                required
                onChange={(e) =>
                  setInput({ ...input, defense: e.target.value })
                }
              />
            </label>
          </div>
          <div className={style.group}>
            <label className={style.nombre}>
              Speed:
              <input
                className={style.input}
                type="number"
                value={input.speed}
                name="speed"
                min="1"
                pattern="^[1-9]+"
                required
                onChange={(e) => setInput({ ...input, speed: e.target.value })}
              />
            </label>
          </div>
          <div className={style.group}>
            <label className={style.nombre}>
              Height:
              <input
                className={style.input}
                type="number"
                value={input.height}
                name="heigth"
                min="1"
                pattern="^[1-9]+"
                required
                onChange={(e) => setInput({ ...input, height: e.target.value })}
              />
            </label>
          </div>
          <div className={style.group}>
            <label className={style.nombre}>
              Weight:
              <input
                className={style.input}
                type="number"
                value={input.weight}
                name="weight"
                min="1"
                pattern="^[1-9]+"
                required
                onChange={(e) => setInput({ ...input, weight: e.target.value })}
              />
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
          <img className={style.pokeBola} src={pokeBola} alt='pokebola'/>
        </div>
      </form>
    </div>
  );
}
