import styles from '../../styles/heroSection/Tab.module.css';

const ContactTab = ({ title, userInfo }) => {
  const { email, phone, address } = userInfo;
  return (
    <div className={styles.tabContent}>
      <h3>{title}</h3>
      <hr />
      <div className={styles.textContainer}>
        <b>
          <p>Email:</p>
        </b>
        <p>{email}</p>
        <b>
          <p>Phone Nr:</p>
        </b>
        <p>{phone}</p>
      </div>
      <div className={styles.textContainer}>
        <b>
          <p>Address:</p>
        </b>
        <p>{address.address}</p>
        <p>{address.city}</p>
      </div>
      <div className={styles.textContainer}>
        <b>
          <p>Postal Code:</p>
        </b>
        <p>{address.postalCode}</p>
        <p>{address.state}</p>
      </div>
    </div>
  );
};

export default ContactTab;
