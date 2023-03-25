import React from 'react';
import CardStyle from './Card.module.css'
import { Link } from "react-router-dom";

const Card = ({id, title, thumbnail, shortDescription}) => <div className={CardStyle.card}>
      <div className={CardStyle.title}>{title}</div>
      <div className={CardStyle.grid}>
        <div>
          <img src={thumbnail} alt="logo" className={CardStyle.image} />
        </div>
        <div className={CardStyle.info}>
          <div>
            {shortDescription}
          </div>
          <Link className={CardStyle.button} to={`games/${id}`}>View More</Link>
        </div>
      </div>
    </div>

export default Card;
