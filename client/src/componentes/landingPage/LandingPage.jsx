import React from 'react';
import { Link } from 'react-router-dom';
import style from '../landingPage/landing.module.css';
import nuevosPokemones from '../../imagenLanding/pokemones.png'

export default function LandingPage() {
  return (
    <div className={style.landing}>
      <h1 className={style.titulo}>WELCOME TO THE GREAT POKEMON API </h1>

      <img  className={style.imagenPokemones} src={nuevosPokemones} alt='imagenLanding'/>
      <Link to="/home">
        <button className={style.button}>Discover the Pokemons</button>
      </Link>
    </div>
  );
}
