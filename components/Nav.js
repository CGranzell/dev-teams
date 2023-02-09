'use client';
import React, { useState, useRef } from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import useOutsideClick from '@/hooks/useOutsideClick';

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
          <Link href={'/'} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href={'/frontend'} onClick={() => setIsOpen(false)}>
            Frontend
          </Link>
          <Link href={'/backend'} onClick={() => setIsOpen(false)}>
            Backend
          </Link>
          <Link href={'/fullstack'} onClick={() => setIsOpen(false)}>
            Fullstack
          </Link>
          <Link href={'/about'} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href={'/contact'} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
      <div className={styles.links}>
        <Link href={'/'}>Home</Link>
        <Link href={'/frontend'}>Frontend</Link>
        <Link href={'/backend'}>Backend</Link>
        <Link href={'/fullstack'}>Fullstack</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
