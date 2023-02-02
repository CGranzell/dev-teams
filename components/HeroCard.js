import styles from '../styles/HeroCard.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroCard = ({ to, name, img }) => {
  return (
    <Link href={to} className={styles.link}>
      <motion.div
        className={styles.container}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={styles.imgContainer}>
          <Image
            src={img}
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
        <div className={styles.skillsContainer}>
          <p>{name}</p>
          <hr />
          <hr />
          <div className={styles.skillWrapper}></div>
        </div>
      </motion.div>
    </Link>
  );
};

export default HeroCard;
