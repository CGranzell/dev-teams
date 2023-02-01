'use client';
import styles from '../styles/Button.module.css';
import { motion } from 'framer-motion';

const Button = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
    >
      Hire Me
    </motion.button>
  );
};

export default Button;
