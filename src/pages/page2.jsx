import { useState } from 'react'
import viteLogo from '/vite.svg'
import styles from './page2.module.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RectangleEnigma from '../assets/RectangleEnigma.svg'
import NFT2 from '../assets/NFT2.svg'
import Ellipse from '../assets/Ellipse.svg'
import Facebook from '../assets/Facebook.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/twitter.svg'
import RectangleAnswer from '../assets/RectangleAnswer.svg'
import RectangleEnterAnswer from '../assets/RectangleEnterAnswer.svg'
import RectangleBet from '../assets/RectangleBet.svg'
import RectangleConnect from '../assets/RectangleConnect.svg'

function Page2() {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 950,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };
  const top = () => {
    // Scroll down 1000 pixels when the button is clicked, you can adjust the value as needed
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <>
    <div className={styles['slide-169-3']}>
  <div className={styles['slide-169-3-child']} />
  <div className={styles['slide-169-3-item']} />
  <div className={styles['slide-169-3-inner']} />
  <b className={styles['lotterie-001']}>Lotterie #001</b>
  <div className={styles['top']}>
    <Link to="/"><div className={styles['denignma']}>Denignma</div></Link>
    <Link to="/page1"><div className={styles['my-account']}>My Account</div></Link>
    <button className={styles['button3']}>
          <img className={styles['button-child3']} alt="" src={RectangleConnect} />
          <b className={styles['connect3']}>Connect</b>
        </button>
  </div>
  <div className={styles['bottom']}>
    <Link to="/"><div className={styles['denignma']} onClick={top}>Denignma</div></Link>
    <Link to="/page1"><div className={styles['my-account1']} onClick={top}>My Account</div></Link>
    <div className={styles['play-lotterie']}>play lotterie</div>
    <img className={styles['facebook-icon']} alt="" src={Facebook} />
    <img className={styles['twitter-icon']} alt="" src={twitter} />
    <img className={styles['group-icon']} alt="" src={LinkedIn} />
  </div>
  <div className={styles['enigma']}>
    <b className={styles['enigma1']}>Enigma</b>
    <div className={styles['i-am-a-container']}>
      <span className={styles['i-am-a-container1']}>
        <p className={styles['i-am-a']}>I am a digital ledger, secure and true,</p>
        <p className={styles['i-am-a']}>Blocks of data, in a chain I accrue.</p>
        <p className={styles['i-am-a']}>Decentralized and encrypted, what am I?</p>
        <p className={styles['i-am-a']}>A technology that makes transactions fly.</p>
      </span>
    </div>
    <div className={styles['i-am-a-container2']}>
      <span className={styles['i-am-a-container1']}>
        <p className={styles['i-am-a']}>I am a digital ledger, secure and true,</p>
        <p className={styles['i-am-a']}>Blocks of data, in a chain I accrue.</p>
        <p className={styles['i-am-a']}>Decentralized and encrypted, what am I?</p>
        <p className={styles['i-am-a']}>A technology that makes transactions fly.</p>
      </span>
    </div>
    <div className={styles['answer']}>
      <div className={styles['email-grou']}>
        <img className={styles['email-grou-child']} alt="" src={RectangleEnterAnswer} />
        <div className={styles['enter-answer']}>Enter answer</div>
      </div>
      <div className={styles['vector-parent']}>
        <img className={styles['frame-child']} alt="" src={RectangleAnswer} />
        <div className={styles['answer1']}>Answer</div>
      </div>
    </div>
    <div className={styles['answer2']}>
      <div className={styles['email-grou']}>
        <img className={styles['email-grou-child']} alt="" src={RectangleEnterAnswer} />
        <div className={styles['enter-answer']}>Enter answer</div>
      </div>
      <div className={styles['vector-parent']}>
        <img className={styles['frame-child']} alt="" src={RectangleAnswer} />
        <div className={styles['answer1']}>Answer</div>
      </div>
    </div>
    <div className={styles['numro']}>
      <img className={styles['numro-child']} alt="" src={Ellipse} />
      <div className={styles['div']}>1</div>
    </div>
    <div className={styles['numro1']}>
      <img className={styles['numro-child']} alt="" src={Ellipse} />
      <div className={styles['div1']}>2</div>
    </div>
  </div>
  <b className={styles['bets']}>Bets</b>
  <b className="stack-tokens">Stack tokens</b>
  <div className={styles['numro2']}>
    <img className={styles['numro-child']} alt="" src={Ellipse} />
    <div className={styles['div']}>1</div>
  </div>
  <div className={styles['btc']}>BTC</div>
  <div className={styles['line-div']} />
  <div className={styles['in-1-week']}>40.000$ in 1 week</div>
  <div className={styles['in-1-week1']}>35.000$ in 1 week</div>
  <button className={styles['button']}>
    <img className={styles['button-child']} alt="" src={RectangleBet} />
    <b className={styles['bet']}>BET</b>
  </button>
  <button className={styles['button1']}>
    <img className={styles['button-child']} alt="" src={RectangleBet} />
    <b className={styles['bet']}>BET</b>
  </button>
  <img className={styles['unsplashpvoepplw818-icon']} alt="" src={NFT2} />
</div>
    </>
  )
}

export default Page2
