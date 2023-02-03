'use client';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h3>Hire Developers</h3>
        <div className={styles.linksContainer}>
          <Link href={'/frontend'}>Hire Front-end Developers</Link>
          <Link href={'/backend'}>Hire Back-end Developers</Link>
          <Link href={'/fullstack'}>Hire Fullstack-end Developers</Link>
        </div>
      </div>
      <div className={styles.grid}>
        <h3>Company</h3>
        <div className={styles.linksContainer}>
          <Link href={'#'}>About Us</Link>
          <Link href={'#'}>Terms of use</Link>
          <Link href={'#'}>Privacy policy</Link>
        </div>
      </div>
      <div className={styles.grid}>
        <h3>Information</h3>
        <div className={styles.linksContainer}>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>FAQ</Link>
          <Link href={'#'}>Hiring Interview Tips</Link>
        </div>
      </div>
      <div className={styles.grid}>
        <h3>Contact Us</h3>
        <div className={styles.linksContainer}>
          <Link href={'#'}>+46-123456789</Link>
          <Link href={'#'}>test@test.com</Link>
          <div className={styles.socials}>
            <FaLinkedin />
            <FaFacebookSquare />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <h3>News letter</h3>
        <p>Get the latest updates and info</p>
        <p>Sign up to our news letter</p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="test@test.com" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
