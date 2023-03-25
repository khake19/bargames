import React from 'react';
import SearchStyle from './Search.module.css'

const Search = () => {
  return <div className={SearchStyle.container}>
    <input className={SearchStyle.input} type="text" placeholder="Search by Name..." />
  </div>
}

export default Search;
