import React from 'react';
import styles from '../../styles/heroSection/SideBarUser.module.css';
import Image from 'next/image';
import fullstackLogo from '../../public/images/wp9641830-front-end-developer-wallpapers.jpg';

const SideBarUserFull = ({
  generalTabHandler,
  contactTabHandler,
  backgroundTabHandler,
  personalTabHandler,
}) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoImg}>
          <Image
            src={fullstackLogo}
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
        <p>My Info</p>
      </div>
      <div className={styles.infoTabsContainer}>
        <button className={styles.tabBtn} onClick={generalTabHandler}>
          General
        </button>
        <button className={styles.tabBtn} onClick={contactTabHandler}>
          Contact
        </button>
        <button className={styles.tabBtn} onClick={backgroundTabHandler}>
          Background
        </button>
        <button className={styles.tabBtn} onClick={personalTabHandler}>
          Personal
        </button>
      </div>
    </div>
  );
};

export default SideBarUserFull;
