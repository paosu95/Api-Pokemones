import React from 'react';
import style from './card.module.css';

export default function Card({ name, image, types }) {
  return (
    <div className={style.padreCard}>
      <div className={style.card}>
        <h3 className={style.name}>{name}</h3>
      </div>
      <div>
        <img className={style.image} src={image} alt="" />
      </div>
      <div>
        {types.map((t) => (
          <p key={t.id} className={style.type}>{t.name}</p>
        ))}
      </div>
    </div>
  );
}
