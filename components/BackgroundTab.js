import styles from '../styles/Tab.module.css';

const BackgroundTab = ({ title, userInfo }) => {
  const { university, name, address, company } = userInfo;

  return (
    <div className={styles.tabContent}>
      <h3>{title}</h3>
      <hr />
      <div className={styles.textContainer}>
        <b>
          <p>University:</p>
        </b>
        <p>{university}</p>
      </div>
      <div className={styles.textContainer}>
        <b>
          <p>Department:</p>
        </b>
        <p>{company.department}</p>
      </div>
      <div className={styles.textContainer}>
        <b>
          <p>Address:</p>
        </b>
        <p>{name}</p>
        <p>{address.address}</p>
      </div>
    </div>
  );
};

export default BackgroundTab;
