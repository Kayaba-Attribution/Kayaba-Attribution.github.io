import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/launchpad.jpg'
              text='Secure and Improved Token Launchpad for EVM conpatible Chains (Focused on BSC)'
              label='Dapp Launchpad'
              path='https://github.com/Kayaba-Attribution/Token-Launchpad-for-EVM-conpatible-Chains-Focused-on-BSC'
            />
            <CardItem
              src='/images/KCB.jpg'
              text='Python API to interact with bep-20 tokens on the binance smart chain'
              label='Trading Bot'
              path='https://github.com/Kayaba-Attribution/KCB-Public-BSC-TERMINAL'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/whales.jpg'
              text='BSC Addresses transcation tracker with Email and Telegram notifications'
              label='Addresses Tracker'
              path='https://github.com/Kayaba-Attribution/BSC-Addresses-tracker-and-txn-bank'
            />
            <CardItem
              src='/images/chart.jpg'
              text='Crypto Charting Application made with P5.JS and Alpha Vantage API'
              label='Crypto Charts'
              path='https://github.com/Kayaba-Attribution/P5.js-Crypto-Chart'
            />
            <CardItem
              src='/images/honeypot.png'
              text='Balance Disorder ETH Honeypot HardHat Example Workflow'
              label='Security Research'
              path='https://github.com/Kayaba-Attribution/Balance-Disorder-ETH-Honeypot'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
