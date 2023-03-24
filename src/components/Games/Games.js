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
  const { data: games } = useFetch('/api/games')

  return <div className={GamesStyle.container}>
    <Header />
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
