import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { useFetch } from '../../api/fetcher.js';
import Header from '../Header';
import GameDetailsStyle from './GameDetails.module.css';
import Error from '../Error'

const GameDetails = () => {
  const { gameId } = useParams();

  const { data: game, isLoading } = useFetch(`/api/game?id=${gameId}`)

  if((!game && !isLoading) || game?.status === 0) return <Error errorMessage={game?.statusMessage}/>

  return <div className={GameDetailsStyle.container}>
    <Header />
    <div className={GameDetailsStyle.details}>
      <img src={game?.thumbnail} alt="thumbnail" className={GameDetailsStyle.image}/>
      <div className={GameDetailsStyle.description}>
        <div className={GameDetailsStyle.requirements}>
          <p className={GameDetailsStyle.title}>Requirements</p>
          <div>
            <p className={GameDetailsStyle.bold}>Graphics</p>
            {game?.minimumSystemRequirements?.graphics}
          </div>
          <div>
            <p className={GameDetailsStyle.bold}>Memory</p>
            {game?.minimumSystemRequirements?.memory}
          </div>
          <div>
            <p className={GameDetailsStyle.bold}>OS</p>
            {game?.minimumSystemRequirements?.os}
          </div>
          <div>
            <p className={GameDetailsStyle.bold}>Processor</p>
            {game?.minimumSystemRequirements?.processor}
          </div>
          <div>
            <p className={GameDetailsStyle.bold}>Storage</p>
            {game?.minimumSystemRequirements?.storage}
          </div>
        </div>
        <div className={GameDetailsStyle.info}>
          <p className={GameDetailsStyle.title}>{game?.title}</p>
          <p>{game?.description}</p>
          <Link className={GameDetailsStyle.button} to='/'>Back</Link>
        </div>
      </div>
    </div>
    <div className={GameDetailsStyle.screenshots}>
      {game?.screenshots?.map(screenshot => <img
        key={screenshot?.id}
        src={screenshot?.image}
        alt="screenshot"
        className={GameDetailsStyle.screenshot}/>)}
    </div>
  </div>
}

export default GameDetails;
