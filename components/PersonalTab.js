import styles from '../styles/Tab.module.css';

const PersonalTab = ({ title, userInfo }) => {

  const { height, weight, eyeColor, hair, bloodGroup } = userInfo;

  return (
    <div className={styles.tabContent}>
    <h3>{title}</h3>
    <div className={styles.textContainer}>
    <b><p>Height:</p></b>
    <p>{height}</p>
    <b><p>Weight:</p></b>
    <p>{weight}</p>
    </div>
    <div className={styles.textContainer}>
    <b><p>Eye Color:</p></b>
    <p>{eyeColor}</p>
    <b><p>Hair:</p></b>
    <p>{hair.color}</p>
    </div>
    <div className={styles.textContainer}>
    <b><p>Blood Group:</p></b>
    <p>{bloodGroup}</p>
    
    </div>
    
  </div>
  )
}

export default PersonalTab