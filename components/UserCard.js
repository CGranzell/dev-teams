import styles from '../styles/UserCard.module.css'
import Image from 'next/image'
import Button from './Button';

const UserCard = ( { userInfo }) => {
  const { image, firstName, lastName } = userInfo;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div className={styles.imgContainer}>
        <Image
              src={image}
              alt="profile-picture"
              quality={100}
              sizes="true"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <h3>Hello My Name is {firstName} { lastName} </h3>
        <p><u>Why hire me:</u></p>
        <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</i></p>
        <div className={styles.btnWrapper}>

        <Button />
        </div>
      </div>
    </div>
  )
}

export default UserCard