import styles from '../../styles/statsSection/StatsSection.module.css';

const StatsSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2>30 +</h2>
          <p>Developers</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2>400 +</h2>
          <p>Customers</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <h2>24h -</h2>
          <p>Response Time</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
