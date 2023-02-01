'use client';
import React from 'react';
import styles from '../styles/MainContainerUser.module.css';
import UserCard from '../components/UserCard';
import GeneralTab from '../components/GeneralTab';
import ContactTab from '../components/ContactTab';

const MainContainerUser = ({ userInfo }) => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.mainInfoWrapper}>
        <div className={styles.mainInfoContainer}>
          <UserCard userInfo={userInfo} />
        </div>
      </div>
      <div className={styles.rowWrapper}>
        <div className={styles.infoTabContainer}>
          <div className={styles.titleContainer}>
            <GeneralTab title="General" userInfo={userInfo} />
          </div>
        </div>
        <div className={styles.infoTabContainer}>
          <div className={styles.titleContainer}>
            <ContactTab title="Contact" userInfo={userInfo} />
          </div>
        </div>
        {/* <div className={styles.row2Container}>
            <InfoTab title="Contact"/>
            </div> */}
      </div>
    </div>
  );
};

export default MainContainerUser;
