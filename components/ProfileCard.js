'use client';
import styles from '../styles/ProfileCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProfileCard = ({ id, firstName, lastName, image, email, phone }) => {
  return (
    <Link href={`/frontend/user/${id}`} className={styles.link}>
      <motion.div
        className={styles.container}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={styles.row1}>
          <div className={styles.imgContainer}>
            <Image
              src={image}
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
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
        </div>
        <div className={styles.row2}>
          <h4>Contact:</h4>
          <div>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>
        <div className={styles.row3}>
          <p>Front-end Developer</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProfileCard;
