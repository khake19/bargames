import React from 'react';
import CardStyle from './Card.module.css'

const Card = ({title, thumbnail, shortDescription}) => <div className={CardStyle.card}>
      <h2 className={CardStyle.title}>{title}</h2>
      <div className={CardStyle.grid}>
        <div>
          <img src={thumbnail} alt="logo" className={CardStyle.image} />
        </div>
        <div>
          <p>
            {shortDescription}
          </p>
          <p className={CardStyle.button}>
            View More 
          </p>
        </div>
      </div>
    </div>

export default Card;
