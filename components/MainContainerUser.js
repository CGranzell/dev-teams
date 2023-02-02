'use client';
import React, { useState } from 'react';
import styles from '../styles/MainContainerUser.module.css';
import UserCard from '../components/UserCard';
import GeneralTab from '../components/GeneralTab';
import ContactTab from '../components/ContactTab';
import BackgroundTab from './BackgroundTab';
import PersonalTab from './PersonalTab';
import Modal from './Modal';
import Form from './Form';

const MainContainerUser = ({
  userInfo,
  showContactTab,
  showGeneralTab,
  showBackgroundTab,
  showPersonalTab,
}) => {
  const [modalShown, toggleModal] = useState(false);

  return (
    <div className={styles.backgroundContainer}>
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
         <Form />
      </Modal>
      <div className={styles.mainInfoWrapper}>
        <div className={styles.mainInfoContainer}>
          <UserCard
            userInfo={userInfo}
            toggleModal={toggleModal}
            modalShown={modalShown}
          />
        </div>
      </div>
      <div className={styles.rowWrapper}>
        <div className={styles.infoTabContainer}>
          <div className={styles.titleContainer}>
            {showGeneralTab && (
              <GeneralTab title="General" userInfo={userInfo} />
            )}
            {showBackgroundTab && (
              <BackgroundTab title="Background" userInfo={userInfo} />
            )}
          </div>
        </div>
        <div className={styles.infoTabContainer}>
          <div className={styles.titleContainer}>
            {showContactTab && (
              <ContactTab title="Contact" userInfo={userInfo} />
            )}
            {showPersonalTab && (
              <PersonalTab title="Personal" userInfo={userInfo} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainerUser;
