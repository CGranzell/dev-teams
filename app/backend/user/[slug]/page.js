import ProfileCard from '@/components/ProfileCard';
import { userJson } from "../../../backend/page";


 async function fetchuserInfo(params) {
  // API call, DB Query, fetch from the app

  // Här ligger problemet, gör en if sats 

  let userInfo = userJson.users?.find(
    (user) => user.id == params.slug
  );

  if(user.id !== params.slug) {
    const response = await fetch('https://dummyjson.com/users');

  const data = await response.json();
  userInfo = data;
  return data;
  }

  return userInfo;
}

export default async function Page({ params }) {
  const userInfo = fetchuserInfo(params);
  console.log(userInfo);

  const { id, firstName } = userInfo;

  return (
   <div>hello</div>
  );
}