import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import {getNamePokemons} from '../../actions/index'
import style from './searchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name)) //estado local name
    }
    return(
        <div className={style.padreInput}>
            <input className={style.input}
            type='text'
            placeholder= "search"
            onChange ={(e)=> handleInputChange}
        
            />
            <button className={style.buttonSearch} type="submit" onSubmit={(e)=> handleSubmit(e)}> Search</button>

            
        </div>
    )
}