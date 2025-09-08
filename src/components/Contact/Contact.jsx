import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    message: '',
    service: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
  };

  const services = [
    'Birth Chart Reading',
    'Relationship Compatibility',
    'Career Guidance',
    'Life Transitions',
    'Tarot Reading',
    'Crystal Healing'
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Connect with the Cosmos</h2>
            <p className={styles.sectionSubtitle}>
              Ready to embark on your cosmic journey? Let's explore the stars together 
              and discover the wisdom they hold for your unique path.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div className={styles.contactDetails}>
                  <h4>Email</h4>
                  <p>cosmic.harmony@stars.com</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📱</div>
                <div className={styles.contactDetails}>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactDetails}>
                  <h4>Location</h4>
                  <p>Mystic Valley, CA 90210</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h4>Follow the Stars</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>🌙</a>
                <a href="#" className={styles.socialLink}>✨</a>
                <a href="#" className={styles.socialLink}>🔮</a>
                <a href="#" className={styles.socialLink}>🌟</a>
              </div>
            </div>
          </div>

          <div className={styles.formContent}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Book Your Reading</h3>
              
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="birthDate" className={styles.formLabel}>Birth Date & Time</label>
                <input
                  type="datetime-local"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.formLabel}>Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={styles.formSelect}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  rows="4"
                  placeholder="Tell us about your cosmic journey and what you hope to discover..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <span className={styles.buttonText}>Send to the Stars</span>
                <span className={styles.buttonIcon}>🚀</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;






