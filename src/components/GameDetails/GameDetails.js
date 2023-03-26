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
          <div className={GameDetailsStyle.title}>Requirements</div>
          <div className={GameDetailsStyle.requirement}>
            <div className={GameDetailsStyle.bold}>Graphics</div>
            {game?.minimumSystemRequirements?.graphics}
          </div>
          <div className={GameDetailsStyle.requirement}>
            <div className={GameDetailsStyle.bold}>Memory</div>
            {game?.minimumSystemRequirements?.memory}
          </div>
          <div className={GameDetailsStyle.requirement}>
            <div className={GameDetailsStyle.bold}>OS</div>
            {game?.minimumSystemRequirements?.os}
          </div>
          <div className={GameDetailsStyle.requirement}>
            <div className={GameDetailsStyle.bold}>Processor</div>
            {game?.minimumSystemRequirements?.processor}
          </div>
          <div className={GameDetailsStyle.requirement}>
            <div className={GameDetailsStyle.bold}>Storage</div>
            {game?.minimumSystemRequirements?.storage}
          </div>
        </div>
        <div className={GameDetailsStyle.info}>
          <div className={GameDetailsStyle.title}>{game?.title}</div>
          <div>{game?.description}</div>
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
