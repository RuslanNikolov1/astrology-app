import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Auto-play audio when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Auto-play was prevented:', error);
          // Auto-play was prevented, user will need to manually start
        });
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Play failed:', error);
          });
      }
    }
  };

  return (
    <header className={styles.header}>
      <audio 
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/Man Of No Ego - Blinkers Removed [432hz] [Downtempo].mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>✨</span>
          <span className={styles.logoText}>Cosmic Harmony</span>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button 
                className={styles.navLink}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className={styles.navItem}>
              <button 
                className={styles.navLink}
                onClick={() => scrollToSection('blog')}
              >
                Blog
              </button>
            </li>
            <li className={styles.navItem}>
              <button 
                className={styles.navLink}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
            <li className={styles.navItem}>
              <button 
                className={styles.navLink}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
          </ul>
        </nav>

        <div className={styles.headerControls}>
          <button 
            className={styles.audioToggle}
            onClick={toggleAudio}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


