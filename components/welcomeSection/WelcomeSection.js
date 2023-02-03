'use client';
import styles from '../../styles/welcomeSection/welcomeSection.module.css'
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
      <div className={styles.heroHeader}>
            <h1>Welcome to Dev Teams</h1>
          </div>
          <div className={styles.heroText}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui nunc. Adipiscing elit pellentesque habitant morbi tristique. Dignissim sodales ut eu sem integer.</p>
          </div>
      </div>
      <div className={styles.testimonialsContainer}>
        
      </div>
    </div>
  )
}

export default WelcomeSection