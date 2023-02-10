import styles from '../../styles/card/Card.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Card = ({ h2, p, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circleContainer}>{icon}</div>
      <h2>{h2}</h2> <p>{p}</p>
      <div className={styles.contactContainer}>
        Contact {h2} <FaLongArrowAltRight className={styles.arrow}/>
      </div>
    </div>
  );
};

export default Card;
