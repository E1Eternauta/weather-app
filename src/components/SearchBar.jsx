import React from 'react';
import styles from './SearchBar.module.css'
import {IoSearchOutline} from 'react-icons/io5'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  function handleOnSearch(event){
    event.preventDefault();
    if(typeof onSearch === 'function'){
      const input = document.getElementById('search-bar-input');
      onSearch(input.value);
      input.value = '';
    }
  }
  return (
    <form className={styles.searchBar} onSubmit={handleOnSearch}>
      <input id='search-bar-input' placeholder='Agrega una nueva ciudad...'></input>
      <button type='submit'>
        <IoSearchOutline />
      </button>
    </form>
  );
};