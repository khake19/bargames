import React, { useMemo } from 'react'
import { useFetch } from '../../api/fetcher.js';
import GamesStyle from './Games.module.css'
import Header from '../Header'
import Card from '../Card'
import Filter from '../Filter'
import Search from '../Search'
import useFiltersStore from '../../stores/filters'
import buildParams from '../../utils/buildParams'

const Games = () => {
  const { platform, sortBy, categories, search } = useFiltersStore();

  const queryString = buildParams(platform, sortBy, categories)

  const { data: games } = useFetch(`/api/games${queryString}`)

  const filteredGames = useMemo(() => {
    if (!games) return [];
    return games.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
  }, [games, search]);

  return <div className={GamesStyle.container}>
    <Header />
    <Search />
    <Filter />
    <div className={GamesStyle.grid}>
      {filteredGames?.map(game => <Card
        key={game.id}
        id={game.id}
        title={game.title}
        thumbnail={game.thumbnail}
        shortDescription={game.shortDescription}
        />)}
    </div>
  </div>
}

export default Games
