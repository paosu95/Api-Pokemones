import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../actions';
import { Link } from "react-router-dom";
import style from './../detailPokemon/detailPokemon.module.css'





export default function DetailPokemon(props){
    const dispatch = useDispatch()
    const pokemon= useSelector((state)=> state.pokemon)
    const types= pokemon.Types??[];
    useEffect(() => {
        dispatch(getPokemon(props.match.params.id));
      }, [dispatch, props.match.params.id]);

    

    return (
        <div className={style.contenedor}>

        <Link to='/home/'><h2 className={style.return}>Return to home</h2>  </Link>  
        <h3 className={style.name}>{pokemon.name}</h3>
        <img className={style.image} src= {pokemon.picture} alt=" "/>
        <div className={style.contenedor2}>
        <h2 className={style.titulo}>Details</h2>
        <h3 >Attack: {pokemon.attack}</h3>
        <h3>Health: {pokemon.hp}</h3>
        <h3>Defense: {pokemon.defense}</h3>
        <h3>Speed: {pokemon.speed}</h3>
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
        <h3>Types: {types.map(t => t.name).join(", ")}</h3>
        </div>    

        </div>
    )
}