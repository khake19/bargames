import React from 'react';
import SearchStyle from './Search.module.css'
import useFiltersStore from '../../stores/filters'

const Search = () => {
  const search = useFiltersStore((state) => state.search)
  const addSearch = useFiltersStore((state) => state.addSearch)

  const handleSearchChange = (e) => {
    addSearch(e.target.value)
  }

  return <div className={SearchStyle.container}>
    <input className={SearchStyle.input} 
      type="text"
      placeholder="Search by Name..."
      value={search} onChange={handleSearchChange}
    />
  </div>
}

export default Search;
