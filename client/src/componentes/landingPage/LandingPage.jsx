import React from 'react';
import { Link } from 'react-router-dom';
import style from '../landingPage/landing.module.css';
import nuevosPokemones from '../../img/pokemonLanding.png'

export default function LandingPage() {
  return (
    <div className={style.landing}>
      <h1 className={style.titulo}>Welcome to great pokemon api</h1>

      <img  className={style.imagenPokemones} src={nuevosPokemones} alt='imagenLanding'/>
      <Link to="/home">
        <button className={style.button}>Discover the Pokemons</button>
      </Link>
    </div>
  );
}
