import React from 'react';

import style from './paginado.module.css';

export default function Paginado({ pokemonsPerPage, allpokemons, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allpokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul className={style.paginado}>
        {pageNumbers.map((number) => (
          <li className={style.number} key={number}>
            <button
              type="button"
              className={style.button}
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
