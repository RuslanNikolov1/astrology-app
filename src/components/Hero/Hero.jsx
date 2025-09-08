import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.constellation}></div>
        <div className={styles.stars}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
        <div className={styles.moon}>🌙</div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Discover Your
              <span className={styles.highlight}> Cosmic Path</span>
            </h1>
            <p className={styles.subtitle}>
              Unlock the ancient wisdom of the stars and embrace the natural harmony 
              that connects us all. Your journey to self-discovery begins here with <span className={styles.astrologicalName}>Lyusyla</span>.
            </p>
            <div className={styles.buttonGroup}>
              <button 
                className={styles.primaryButton}
                onClick={scrollToContact}
              >
                <span className={styles.buttonText}>Reserve Your Reading</span>
                <span className={styles.buttonIcon}>✨</span>
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.buttonText}>Explore Blog</span>
                <span className={styles.buttonIcon}>📖</span>
              </button>
            </div>
          </div>
          
          <div className={styles.visualElements}>
            <div className={styles.zodiacWheel}>
              <div className={styles.wheel}>
                <div className={styles.sign}>♈</div>
                <div className={styles.sign}>♉</div>
                <div className={styles.sign}>♊</div>
                <div className={styles.sign}>♋</div>
                <div className={styles.sign}>♌</div>
                <div className={styles.sign}>♍</div>
                <div className={styles.sign}>♎</div>
                <div className={styles.sign}>♏</div>
                <div className={styles.sign}>♐</div>
                <div className={styles.sign}>♑</div>
                <div className={styles.sign}>♒</div>
                <div className={styles.sign}>♓</div>
                <div className={styles.sun}>☀️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Scroll to explore</div>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  );
};

export default Hero;

