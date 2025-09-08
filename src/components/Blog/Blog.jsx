import React from 'react';
import styles from './Blog.module.scss';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Cosmic Dance of Spring Equinox",
      description: "As the sun crosses the celestial equator, we witness the perfect balance between day and night. This powerful moment marks a time of renewal and fresh beginnings, when the universe invites us to plant seeds of intention and watch them bloom under the nurturing light of longer days."
    },
    {
      id: 2,
      title: "Mercury Retrograde: A Time for Reflection",
      description: "When Mercury appears to move backward through the sky, it's not a time to fear, but an opportunity to slow down and reflect. This cosmic pause allows us to review, revise, and reconnect with what truly matters in our lives."
    },
    {
      id: 3,
      title: "Full Moon in Scorpio: Deep Transformation",
      description: "The intense energy of Scorpio's full moon brings hidden truths to light and invites us to embrace our shadow selves. This is a time for profound healing and transformation, as we release what no longer serves our highest good."
    },
    {
      id: 4,
      title: "Venus in Taurus: Embracing Earth's Abundance",
      description: "When Venus graces the sign of Taurus, we're called to appreciate life's simple pleasures and connect with nature's rhythms. This transit encourages us to slow down, savor the moment, and find beauty in the natural world around us."
    },
    {
      id: 5,
      title: "The Healing Power of Crystals and Stars",
      description: "Discover how the ancient wisdom of crystal healing aligns with astrological energies. Each crystal carries the memory of Earth's formation, just as each star holds the blueprint of cosmic creation."
    },
    {
      id: 6,
      title: "Jupiter's Blessing: Expansion and Growth",
      description: "As the largest planet in our solar system, Jupiter brings opportunities for growth, wisdom, and abundance. When this benevolent giant aspects your chart, doors open and possibilities expand beyond your wildest dreams."
    },
    {
      id: 7,
      title: "The Sacred Geometry of the Universe",
      description: "From the spiral of a galaxy to the hexagonal structure of a snowflake, sacred geometry reveals the mathematical patterns that govern our universe. Understanding these patterns helps us align with the natural flow of cosmic energy."
    },
    {
      id: 8,
      title: "Saturn's Lessons: Building Lasting Foundations",
      description: "Saturn, the taskmaster of the zodiac, teaches us about discipline, responsibility, and the importance of building solid foundations. While its lessons may be challenging, they ultimately lead to wisdom and mastery."
    },
    {
      id: 9,
      title: "The Moon's Influence on Earth's Tides",
      description: "Just as the moon controls the ocean's tides, it influences the ebb and flow of our emotions and energy. Understanding lunar cycles helps us work with these natural rhythms rather than against them."
    }
  ];

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.moon}></div>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Cosmic Insights & Natural Wisdom</h2>
        <p className={styles.sectionSubtitle}>
          Explore the ancient connections between celestial movements and earthly experiences
        </p>
        
        <div className={styles.postsGrid}>
          {blogPosts.map((post, index) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postHeader}>
                <div className={styles.postNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={styles.postCategory}>
                  {index % 3 === 0 ? 'Celestial Events' : 
                   index % 3 === 1 ? 'Planetary Transits' : 'Natural Wisdom'}
                </div>
              </div>
              
              <h3 className={styles.postTitle}>{post.title}</h3>
              
              <p className={styles.postDescription}>
                {post.description}
              </p>
              
              <div className={styles.postFooter}>
                <div className={styles.readMore}>
                  <span className={styles.readMoreText}>Read More</span>
                  <span className={styles.readMoreIcon}>→</span>
                </div>
                <div className={styles.threeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className={styles.viewAllContainer}>
          <button className={styles.viewAllButton}>
            <span>View All Articles</span>
            <span className={styles.buttonIcon}>✨</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;





