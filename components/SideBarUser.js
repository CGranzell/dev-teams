import React from 'react'
import styles from '../styles/SideBarUser.module.css'
import Image from 'next/image'
import frontendLogo from '../public/images/wp9641823-front-end-developer-wallpapers.jpg';
import TabButton from '../components/TabButton';

const SideBarUser = () => {
  return (
    <div className={styles.sideBar}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImg}>
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
          <p>My Info</p>
        </div>
        <div className={styles.infoTabsContainer}>
          <TabButton title="General" />
          <TabButton title="Contact" />
          <TabButton title="Background" />
          <TabButton title="Personal" />
        </div>
      </div>
  )
}

export default SideBarUser