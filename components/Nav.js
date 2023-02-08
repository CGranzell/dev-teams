'use client';
import React, { useState } from 'react';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurger = () => {
    setIsOpen((prev) => !prev);
  };

  const clicked = isOpen ? styles.hamburgerOpen : styles.hamburgerClosed;
  

  return (
    <nav className={styles.nav}>

      {/* <div className={clicked} onClick={handleBurger}>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className={clicked} onClick={handleBurger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && (
        
      <div className={styles.burgerMenu}></div>
      )}
    </nav>
  );
};

export default Nav;
