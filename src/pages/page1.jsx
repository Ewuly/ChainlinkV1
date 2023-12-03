import { useState } from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RectangleEnigma from '../assets/RectangleEnigma.svg'
import NFT2 from '../assets/NFT2.svg'
import Facebook from '../assets/Facebook.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/twitter.svg'
import styles from'./page1.module.css'



function Page1() {

  const top = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <>
    <div className={styles['slide-169-2']}>
  <div className={styles['slide-169-2-child']} />
  <div className={styles['slide-169-2-item']} />
  <div className={styles['slide-169-2-inner']} />
  <b className={styles['dashboard']}>Dashboard</b>
  <div className={styles['top']}>
    <Link to="/"><div className={styles['denigma']}>Denigma</div></Link>
    <Link to="/page2"><div className={styles['my-account']}>My Account</div></Link>

  </div>
  <div className={styles['bottom']}>
    <Link to="/"><div className={styles['denigma']} onClick={top}>denigma</div></Link>
    <div className={styles['my-account1']} onClick={top}>My account</div>
    <div className={styles['play-lotterie']}>play lotterie</div>
    <img className={styles['facebook-icon']} alt="" src={Facebook} />
    <img className={styles['twitter-icon']} alt="" src={twitter} />
    <img className={styles['group-icon']} alt="" src={LinkedIn} />
  </div>
  <div className={styles['raffle']}>
    <div className={styles['lotterie']}>
      <div className={styles['lotterie-child']} />
      <div className={styles['state-0']}>State 0</div>
      <div className={styles['nft-1']}>NFT 1</div>
      <img className={styles['unsplashpvoepplw818-icon']} alt="" src={NFT2} />
    </div>
    <div className={styles['lotterie1']}>
      <div className={styles['lotterie-child']} />
      <div className={styles['state-0']}>State 1</div>
      <div className={styles['nft-1']}>NFT 2</div>
      <img className={styles['unsplashpvoepplw818-icon']} alt="" src={NFT2} />
    </div>
    <button className={styles['button']}>
      <img className={styles['button-child']} alt="" src={RectangleEnigma} />
      <Link to="/page2"><div className={styles['answer-enigmas']} onClick={top}>Answer enigmas</div></Link>
    </button>
    <b className={styles['raffle-1']}>Raffle 1</b>
  </div>
  <div className={styles['raffle1']}>
    <div className={styles['lotterie']}>
      <div className={styles['lotterie-inner']} />
      <div className={styles['state-0']}>State 0</div>
      <div className={styles['nft-1']}>NFT 1</div>
      <img className={styles['unsplashpvoepplw818-icon']} alt="" src={NFT2} />
    </div>
    <div className={styles['lotterie1']}>
      <div className={styles['lotterie-inner']} />
      <div className={styles['state-0']}>State 1</div>
      <div className={styles['nft-1']}>NFT 2</div>
      <img className={styles['unsplashpvoepplw818-icon']} alt="" src={NFT2} />
    </div>
    <button className={styles['button']}>
      <img className={styles['button-child']} alt="" src={RectangleEnigma} />
      <Link to="/page2"><div className={styles['answer-enigmas']} onClick={top}>Answer enigmas</div></Link>
    </button>
    <b className={styles['raffle-2']}>Raffle 2</b>
  </div>
</div>
    </>
  )
}

export default Page1
