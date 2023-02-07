'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/heroSection/HeroSection.module.css';
import HeroCard from './HeroCard';
import backendPic from '../../public/images/wp9641819-front-end-developer-wallpapers.jpg';
import fronendPic from '../../public/images/wp9641823-front-end-developer-wallpapers.jpg';
import fullstack from '../../public/images/wp9641830-front-end-developer-wallpapers.jpg';

const HeroSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroTexts}>
         
          <div className={styles.heroDesc}>
            <h5>Find a Developer for your next project</h5>
          </div>
        </div>

        <div className={styles.cardContainer}>
        <div className={styles.wrapperCards}>
          <HeroCard to="/frontend" name="Frontend" img={fronendPic} />

        </div>
        <div className={styles.wrapperCards}>

          <HeroCard to="/backend" name="Backend" img={backendPic} />
        </div>
        <div className={styles.wrapperCards}>

          <HeroCard to="fullstack" name="Fullstack" img={fullstack} />
        </div>
        </div>

        
      </div>
    </>
  );
};

export default HeroSection;
