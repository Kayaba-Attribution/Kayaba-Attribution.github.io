import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/lines.mp4' autoPlay loop muted /> 
      <h1>BlockChain Developer</h1>
      <p>Juan David Gomez Villalba</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonLink='https://github.com/Kayaba-Attribution'
        >
          GITHUB
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          buttonLink='https://www.linkedin.com/in/-juan-david-gomez-ca/'
        >
          LinkedIn <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
