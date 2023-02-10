'use client';
import React, { useState, useRef } from 'react';
import styles from '../styles/Nav.module.css';
import useOutsideClick from '@/hooks/useOutsideClick';
import NavItem from './NavItem';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const handleBurger = () => {
    setIsOpen((prev) => !prev);
  };

  const clicked = isOpen ? styles.hamburgerOpen : styles.hamburgerClosed;

  return (
    <nav className={styles.nav}>
      <div className={clicked} onClick={handleBurger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && (
        <div className={styles.burgerMenu} ref={ref}>
          <NavItem setIsOpen={setIsOpen} />
        </div>
      )}
      <div className={styles.links}>
        <NavItem />
      </div>
    </nav>
  );
};

export default Nav;
