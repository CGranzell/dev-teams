import styles from './page.module.css';
import frontendLogo from '../../../../public/images/wp9641823-front-end-developer-wallpapers.jpg';
import Image from 'next/image';
import InfoTab from '@/components/GeneralTab';
import TabButton from '@/components/TabButton';
import MainContainerUser from '@/components/MainContainerUser';
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
  // const [infoTab, setInfoTab] = useState(second)
  // const userInfo = fetchuserInfo(params);
  const userInfo = await fetchUsers(params);

  // console.log(userInfo.address.address);

  const { id, firstName, lastName, maidenName, age, gender, birthDate } =
    userInfo;
  // console.log(id);

  return (
    <div className={styles.mainContainer}>
      {/* Sidebar */}
      <div className={styles.sideBar}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImg}>
            <Image
              src={frontendLogo}
              alt="profile-picture"
              quality={100}
              sizes="true"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
          <p>My Info</p>
        </div>
        <div className={styles.infoTabsContainer}>
          <TabButton title="General" />
          <TabButton title="Contact" />
          <TabButton title="Background" />
          <TabButton title="Personal" />
        </div>
      </div>
      {/* Main container  */}
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <div className={styles.nameWrapper}>
            <h2>
              {firstName} {lastName}
            </h2>
          </div>
          <div className={styles.frontendWrapper}>
            <p>Front-end Developer</p>
            <div className={styles.frontendImgWrapper}>
              <Image
                src={frontendLogo}
                alt="profile-picture"
                quality={100}
                sizes="true"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </div>
        <MainContainerUser userInfo={userInfo} />
      </div>
    </div>
  );
}
