import React from 'react'
import styles from '../styles/User.module.css'
import SideBarUser from '../components/SideBarUser';
import Image from 'next/image';
import frontendLogo from '../public/images/wp9641823-front-end-developer-wallpapers.jpg';
import MainContainerUser from '../components/MainContainerUser';

const User = ({ userInfo }) => {
  const { id, firstName, lastName } =
    userInfo;
  return (
    <div className={styles.mainContainer}>
      {/* Sidebar */}
      <SideBarUser />
      {/* Main container  */}
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <div className={styles.nameWrapper}>
            <h2>
              {firstName} {lastName}
            </h2>
          </div>
          <div className={styles.frontendWrapper}>
            <p>Front-end Developer</p>
            <div className={styles.frontendImgWrapper}>
              <Image
                src={frontendLogo}
                alt="profile-picture"
                quality={100}
                sizes="true"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </div>
        <MainContainerUser userInfo={userInfo} />
      </div>
    </div>
  )
}

export default User