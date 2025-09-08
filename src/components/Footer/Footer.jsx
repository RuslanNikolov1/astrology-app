import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>✨</span>
              <span className={styles.logoText}>Cosmic Harmony</span>
            </div>
            <p className={styles.footerDescription}>
              Connecting you with the ancient wisdom of the stars and the natural 
              rhythms of the universe. Your journey to cosmic understanding begins here.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                🌙
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                ✨
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                🔮
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                🌟
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Services</h4>
            <ul className={styles.footerList}>
              <li><a href="#" className={styles.footerLink}>Birth Chart Reading</a></li>
              <li><a href="#" className={styles.footerLink}>Relationship Compatibility</a></li>
              <li><a href="#" className={styles.footerLink}>Career Guidance</a></li>
              <li><a href="#" className={styles.footerLink}>Life Transitions</a></li>
              <li><a href="#" className={styles.footerLink}>Tarot Reading</a></li>
              <li><a href="#" className={styles.footerLink}>Crystal Healing</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Resources</h4>
            <ul className={styles.footerList}>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
              <li><a href="#" className={styles.footerLink}>Moon Calendar</a></li>
              <li><a href="#" className={styles.footerLink}>Zodiac Guide</a></li>
              <li><a href="#" className={styles.footerLink}>Crystal Guide</a></li>
              <li><a href="#" className={styles.footerLink}>Meditation</a></li>
              <li><a href="#" className={styles.footerLink}>FAQ</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>cosmic.harmony@stars.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Mystic Valley, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Cosmic Harmony. All rights reserved. 
              <span className={styles.magic}> ✨ Made with cosmic love ✨</span>
            </p>
            <div className={styles.footerBottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
              <a href="#" className={styles.bottomLink}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <button 
        className={styles.scrollToTop}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className={styles.scrollIcon}>↑</span>
      </button>
    </footer>
  );
};

export default Footer;





