import React from 'react';
import styles from '../../styles/heroSection/HeaderUser.module.css';
import Image from 'next/image';
import frontendLogo from '../../public/images/wp9641823-front-end-developer-wallpapers.jpg';

const HeaderUserFront = ({ userInfo }) => {
  const { firstName, lastName } = userInfo;

  return (
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
  );
};

export default HeaderUserFront;
