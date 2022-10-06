import React from 'react';
import { useState, useEffect } from 'react';
import style from './paginado.module.css';
import vector from '../../img/Vector.png';
import vector2 from '../../img/Vector2.png';

export default function Paginado({ setCurrentPage, currentPage, maximo }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    validatePagination("1");
  }, [maximo]);

  useEffect(() => {
    setInput(currentPage.toString());
  }, [currentPage]);

  const nextPage = () => {
    const newPage = currentPage + 1; 
    setCurrentPage(newPage);
  };

  const previousPage = () => {
    const newPage = currentPage - 1; 
    setCurrentPage(newPage);
  };

  const validatePagination = (inputString) => {
    let page = parseInt(inputString);

    if (page < 1 || page > maximo || isNaN(page)) {
      page = 1;
    } 

    setCurrentPage(page);
    setInput(page.toString());
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      validatePagination(input);
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onBlur = () => {
    validatePagination(input);
  };

  return (
    <div className={style.container}>
      <button
        disabled={currentPage === 1}
        onClick={previousPage}
        className={style.previusPage}
      >
        <img className={style.vector} src={vector} alt="vector.png" />
      </button>
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        name="page"
        value={input}
        autoComplete="off"
        className={style.input}
        type="text"
      />
      <p> de {maximo}</p>
      <button
        disabled={currentPage === maximo || maximo === 0}
        onClick={nextPage}
        className={style.nextPage}
      >
        <img className={style.vector} src={vector2} alt="vector2.png" />
      </button>
    </div>
  );
}
