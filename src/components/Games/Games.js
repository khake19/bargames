import { useFetch } from '../../api/fetcher.js';
import GamesStyle from './Games.module.css'
import Header from '../Header'
import Card from '../Card'


const Filter = () => <>
  <div>
    Search for what to play next!
    <input />
  </div>
  <div>
    Filter by platform: <input />
    Filter by category: <input />
    Sort by: <input />
  </div>
  </>

const Games = () => {
  const { data } = useFetch('/api/games')
  console.log('data', data)
  return <div className={GamesStyle.container}>
    <Header />
    <Filter />
    <div className={GamesStyle.grid}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </div>
}

export default Games
