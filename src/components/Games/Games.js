import { useFetch } from '../../api/fetcher.js';
import GamesStyle from './Games.module.css'
import Header from '../Header'


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

const GameItem = ({name}) => {
  return <div>
    {name}
    </div>
}
const Games = () => {
  const { data } = useFetch('/api/games')
  console.log('data', data)
  const games = [{id: 1, name: 'Apex Legends'}, { id: 2, name: 'Overwatch'}]
  return <div className={GamesStyle.container}>
    <Header />
    <Filter />
    <div>
      {games.map(game => <GameItem key={game.id} name={game.name}/>)}
    </div>
    </div>
}

export default Games
