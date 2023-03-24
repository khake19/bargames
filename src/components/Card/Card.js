import React from 'react';
import CardStyle from './Card.module.css'
import logo from '../../logo.svg'

const Card = () => <div className={CardStyle.card}>
      <h2 className={CardStyle.title}>Card Title</h2>
      <div className={CardStyle.grid}>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <p>
            One big change with the grid is that you first determine what 
            the grid template will look like. Meaning how many columns 
            and/or rows you want in your layout.
          </p>
          <p className={CardStyle.button}>
            View More 
          </p>
        </div>
      </div>
    </div>

export default Card;
