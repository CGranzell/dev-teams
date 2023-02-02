import ProfileCardFull from '@/components/ProfileCardFull';
import styles from './page.module.css';

async function fetchUsers() {
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchUsers();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Fullstack Developers</h2>
          <p>
            Browse through our developers and read more if you find someone
            interesting
          </p>
        </div>
        <div className={styles.container}>
          {data.users.map(
            ({ id, firstName, lastName, image, email, phone, university }) => (
              <div key={id} className={styles.profileContainer}>
                <ProfileCardFull
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  image={image}
                  email={email}
                  phone={phone}
                  university={university}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
