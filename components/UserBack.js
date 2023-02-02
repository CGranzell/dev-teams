'use client';
import React, { useState } from 'react';
import styles from '../styles/User.module.css';
import SideBarUserBack from './SideBarUserBack';
import MainContainerUser from './MainContainerUser';
import HeaderUserBack from './HeaderUserBack';
import GeneralTab from './GeneralTab';

const UserBack = ({ userInfo }) => {
  
  const [showGeneralTab, setShowGeneralTab] = useState(true);
  const [showContactTab, setShowContactTab] = useState(true);
  const [showBackgroundTab, setShowBackgroundTab] = useState(false);
  const [showPersonalTab, setShowPersonalTab] = useState(false);

  const generalTabHandler = () => {
    setShowGeneralTab(true);
    setShowBackgroundTab(false);
  };
  const contactTabHandler = () => {
    setShowContactTab(true);
    setShowPersonalTab(false);
  };
  const backgroundTabHandler = () => {
    setShowGeneralTab(false);
    setShowBackgroundTab(true);
   
  };
  const personalTabHandler = () => {
    setShowContactTab(false);
    setShowPersonalTab(true);
   
  };

  

  return (
    <div className={styles.mainContainer}>
      {/* Sidebar */}
      <SideBarUserBack
        generalTabHandler={generalTabHandler}
        contactTabHandler={contactTabHandler}
        backgroundTabHandler={backgroundTabHandler}
        personalTabHandler={personalTabHandler}
      />
      {/* Main container  */}
      <div className={styles.container}>
        <HeaderUserBack userInfo={userInfo} />
        <MainContainerUser
          userInfo={userInfo}
          showGeneralTab={showGeneralTab}
          showContactTab={showContactTab}
          showBackgroundTab={showBackgroundTab}
          showPersonalTab={showPersonalTab}

        />
      </div>
    </div>
  );
};

export default UserBack;
