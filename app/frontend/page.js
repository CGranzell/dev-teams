import ProfileCard from '@/components/ProfileCard';
import Link from 'next/link';
import styles from './page.module.css';

export let userJson = {};

// Static data fetching
async function fetchUsers() {
  const response = await fetch('https://dummyjson.com/users');

  const data = await response.json();
  userJson = data;
  return data;
}

export default async function Page() {
  const data = await fetchUsers();

  return (
    
      <div className={styles.mainContainer}>
        <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Front-end Developers</h2>
          <p>
            Browse through our developers and read more if you find someone
            interesting
          </p>
        </div>
        <div className={styles.container}>
        
          {data.users.map(({ id, firstName, lastName, image, email, phone }) => (
            <div key={id} className={styles.profileContainer}>
              <ProfileCard
                id={id}
                firstName={firstName}
                lastName={lastName}
                image={image}
                email={email}
                phone={phone}
              />
            </div>
          ))}
        </div>
        </div>
        </div>
    
  );
}
