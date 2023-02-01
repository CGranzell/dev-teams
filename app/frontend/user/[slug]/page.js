import styles from './page.module.css';
import UserCard from '@/components/UserCard';
// import { userJson } from "../../../frontend/page";

// export let userJson = {};

async function fetchUsers(params) {
  const response = await fetch(`https://dummyjson.com/users/${params.slug}`);

  const data = await response.json();
  // userJson = data;
  return data;
}

//   function fetchuserInfo(params) {
//   // API call, DB Query, fetch from the app

//   // Här ligger problemet, gör en if sats

//   let userInfo = userJson.users?.find(
//     (user) => user.id == params.slug
//   );

//   return userInfo;
// }

export default async function Page({ params }) {
  // const userInfo = fetchuserInfo(params);
  const userInfo = await fetchUsers(params);

  console.log(userInfo);

  const { id, firstName, lastName, image } = userInfo;
  // console.log(id);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sideBar}></div>
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <h2>
            {firstName} {lastName}
          </h2>
        </div>
        <div className={styles.backgroundContainer}>
          <div className={styles.mainInfoWrapper}>
            <div className={styles.mainInfoContainer}>
              <UserCard userInfo={userInfo} />
            </div>
          </div>
          <div className={styles.rowWrapper}>
            <div className={styles.row1Container}></div>
            <div className={styles.row2Container}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
