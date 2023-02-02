import React from 'react'
import styles from '../styles/HeaderUser.module.css'
import Image from 'next/image';
import backendLogo from '../public/images/wp9641819-front-end-developer-wallpapers.jpg';

const HeaderUserBack = ({ userInfo }) => {

  const { id, firstName, lastName } =
  userInfo;

  return (
    <div className={styles.nameContainer}>
    <div className={styles.nameWrapper}>
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
    <div className={styles.frontendWrapper}>
      <p>Back-end Developer</p>
      <div className={styles.frontendImgWrapper}>
        <Image
          src={backendLogo}
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
  )
}

export default HeaderUserBack