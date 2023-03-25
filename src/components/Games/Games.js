import React from 'react'
import { useFetch } from '../../api/fetcher.js';
import GamesStyle from './Games.module.css'
import Header from '../Header'
import Card from '../Card'
import Filter from '../Filter'
import Search from '../Search'
import useFiltersStore from '../../stores/filters'

const buildParams = (platform, sortBy, categories) => {
  let queryString = ''

  if(platform) {
    queryString += `platform=${platform}`
  }

  if(sortBy) {
    if (queryString) {
      queryString += '&'
    }
    queryString += `sort-by=${sortBy}`
  }

  if(categories) {
    if (queryString) {
      queryString += '&'
    }
    queryString += categories.map(cat => `category=${cat}`).join('&');
  }

  if (queryString) {
    queryString = `?${queryString}`
  }

  return queryString
}

const Games = () => {
  const platform = useFiltersStore((state) => state.platform)
  const sortBy = useFiltersStore((state) => state.sortBy)
  const categories = useFiltersStore((state) => state.categories)

  const queryString = buildParams(platform, sortBy, categories)

  const { data: games } = useFetch(`/api/games${queryString}`)

  return <div className={GamesStyle.container}>
    <Header />
    <Search />
    <Filter />
    <div className={GamesStyle.grid}>
      {games?.slice(0, 10).map(game => <Card
        key={game.id}
        title={game.title}
        thumbnail={game.thumbnail}
        shortDescription={game.shortDescription}
        />)}
    </div>
    </div>
}

export default Games
