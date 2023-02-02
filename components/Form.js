import styles from '../styles/Form.module.css';
import { motion } from 'framer-motion';
const Form = () => {
  return (
    <form className={styles.container}>
      <label for="name">Name:</label>
      <input id="name" name="name" type="text" placeholder="Name..." />
      <label for="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="name@example.com"
      />
      <label for="phone">Phone Nr:</label>
      <input id="phone" name="phone" type="phone" placeholder="+46123456789" />
      <div className={styles.buttonContainer}>
        <motion.button
          type="button"
          className={styles.submitBtn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit request
        </motion.button>
      </div>
    </form>
  );
};

export default Form;
