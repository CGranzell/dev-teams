import styles from '../styles/Tab.module.css'

const GeneralTab = ({ title, userInfo }) => {
  const { firstName, lastName,  age, gender , birthDate } = userInfo;
  return (
    <div className={styles.tabContent}>
      <h3>{title}</h3>
      <hr />
      <div className={styles.textContainer}>
      <b> <p> Name: </p> </b>
      <p>{firstName}</p>
     
      <p>{lastName}</p>
      
      </div>
      <div className={styles.textContainer}>
       <b> <p>Age:</p> </b>
      <p>{age}</p>
      <b> <p>Gender:</p> </b>
      <p>{gender}</p>
      </div>
      <div className={styles.textContainer}>
       <b> <p>Birthdate: </p></b>
      <p>{birthDate}</p>
      </div>
    </div>
  )
}

export default GeneralTab