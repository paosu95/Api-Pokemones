import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../actions';
import { Link } from 'react-router-dom';
import style from './../detailPokemon/detailPokemon.module.css';
import internationalPokemon from './../../img/International_Pokémon_logo.svg.webp'
import { deletePokemon } from '../../actions';

export default function DetailPokemon(props) {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const types = pokemon.Types ?? [];
  useEffect(() => {
    dispatch(getPokemon(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const handleDelete = (id) =>{
    dispatch(deletePokemon(id))


  }

  return (
    <div className={style.contenedor}>
      <Link to="/home/">
        <p className={style.return}>Return to home</p>{' '}
      </Link>
      <h3 className={style.name}>{pokemon.name}</h3>
      <img className={style.logoPokemones} src={internationalPokemon} alt='logoPokemon'/>
      <img className={style.image} src={pokemon.picture} alt=" " />
      <div className={style.contenedor2}>
        <h2 className={style.titulo}>Details</h2>
        <p>Attack: {pokemon.attack}</p>
        <p>Health: {pokemon.hp}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {types.map((t) => t.name).join(', ')}</p>
       
      </div>
      <div>
         <button onClick={() => handleDelete(pokemon.id)}>Delete</button>
      </div>
      
    </div>
  );
}
