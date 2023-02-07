import styles from '../../styles/heroSection/Tab.module.css';

const ContactTab = ({ title, userInfo }) => {
  const { email, phone } = userInfo;
  return (
    <div className={styles.tabContent}>
      <h3>{title}</h3>
      <hr />
      <div className={styles.textContainer}>
        <b>
          <p>Email:</p>
        </b>
        <p>{email}</p>
        
      </div>
      <div className={styles.textContainer}>
      <b>
          <p>Phone Nr:</p>
        </b>
        <p>{phone}</p>
      </div>
      
    </div>
  );
};

export default ContactTab;
