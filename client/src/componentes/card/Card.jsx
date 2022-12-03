import React from 'react';
import style from './card.module.css';

export default function Card({ name, image, types}) {
  return (
    <div className={style.padreCard}>
      <h3 className={style.name}>{name}</h3>
      <img className={style.image} src={image} alt="pokemon" />
      <p>{types.map((t) => t.name).join(', ')}</p>
    </div>
  );
}
