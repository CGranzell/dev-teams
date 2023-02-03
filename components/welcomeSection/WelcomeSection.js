'use client';
import styles from '../../styles/welcomeSection/welcomeSection.module.css';
import Image from 'next/image';
import { FaStar, FaQuoteLeft, FaThumbsUp } from 'react-icons/fa';
import testiMonialPic from '../../public/images/pexels-vinicius-wiesehofer-1130626.jpg';

const WelcomeSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <div className={styles.heroHeader}>
          <h1>Welcome to Dev Teams</h1>
        </div>
        <div className={styles.heroText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
            blandit massa enim nec dui nunc. Adipiscing elit pellentesque
            habitant morbi tristique. Dignissim sodales ut eu sem integer.
          </p>
        </div>
      </div>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsWrapper}>
          <div className={styles.row1}>
            <div className={styles.starContainer}>
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
            </div>
            <div className={styles.imgContainer}>
              <div className={styles.imgWrapper}>
                <Image
                  src={testiMonialPic}
                  alt="profile-picture"
                  quality={100}
                  sizes="true"
                  fill
                  style={{
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.testiMonialTextWrapper}>
                      <FaQuoteLeft />
                      <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra.</i></p>
                     
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
