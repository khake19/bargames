const Header = () => <div>Find & Track the best free-to-play games!</div>
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
  const games = [{id: 1, name: 'Apex Legends'}, { id: 2, name: 'Overwatch'}]
  return <>
    <Header />
    <Filter />
    <div>
      {games.map(game => <GameItem key={game.id} name={game.name}/>)}
    </div>
    </>
}

export default Games
