import styles from './page.module.css';
import Card from '@/components/card/Card';
import { FaDollarSign, FaPhoneAlt, FaCamera } from 'react-icons/fa';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Contact Us</h1>
        <p>Get in touch and let us know how we can help</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            icon={<FaDollarSign className={styles.icon} />}
            h2={'Sales'}
            p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            icon={<FaPhoneAlt className={styles.icon}/>}
            h2={'Help & Support'}
            p={
              'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
            }
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
          icon={<FaCamera className={styles.icon} />}
            h2={'Media & Press'}
            p={
              'In nisl nisi scelerisque eu ultrices labore et dolore consectetur'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default page;
