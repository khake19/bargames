import React, { useMemo } from 'react'
import { useFetch } from '../../api/fetcher.js';
import GamesStyle from './Games.module.css'
import Header from '../Header'
import Card from '../Card'
import Filter from '../Filter'
import Search from '../Search'
import useFiltersStore from '../../stores/filters'

const buildParams = (platform, sortBy, categories) => {
  const queryParts = [];

  if (platform) {
    queryParts.push(`platform=${platform}`);
  }

  if (sortBy) {
    queryParts.push(`sort-by=${sortBy}`);
  }

  if (categories.length) {
    categories.forEach(cat => {
      queryParts.push(`category=${cat}`);
    });
  }

  return queryParts.length ? `?${queryParts.join('&')}` : '';
}

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
      {filteredGames?.slice(0, 10).map(game => <Card
        key={game.id}
        title={game.title}
        thumbnail={game.thumbnail}
        shortDescription={game.shortDescription}
        />)}
    </div>
    </div>
}

export default Games
