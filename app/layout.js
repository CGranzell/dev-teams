import { Montserrat } from '@next/font/google';
import Link from 'next/link';
import Nav from '@/components/Nav';

// These styles apply to every route in the application
import './global.css';
import styles from './rootStyle.module.css';
import Footer from '@/components/Footer';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head />
      <body>
        <Nav />

        <div className={styles.container}>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
