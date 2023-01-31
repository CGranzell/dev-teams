import styles from './page.module.css'
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

// Dynamic Data Fetching or Server Side Rendering
async function fetchProfiles() {
  const response = await fetch(
   
     "https://dummyjson.com/users/?limit=3",
     { cache: "no-store" }
  );

  const profiles = await response.json();
  return profiles;
}


export default async function Page() {
  const profiles = await fetchProfiles();
  // console.log(profiles);
  return (
    <>
   
    <Link href="/profiles">Profiles</Link>
      {/* {profiles.users.map((user => 
          <ul>
            <li>{user.firstName}</li>
          </ul>
      ))} */}
      <HeroSection />
    </>
  );
}


