'use client';
import styles from '../styles/Button.module.css';
import { motion } from 'framer-motion';

const Button = ({ toggleModal, modalShown }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.container}
      onClick={() => {
        toggleModal(!modalShown);
      }}
    >
      Hire Me
    </motion.button>
  );
};

export default Button;
