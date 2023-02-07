import UserFront from '@/components/heroSection/UserFull';


async function fetchUsers(params) {
  const response = await fetch(`https://dummyjson.com/users/${params.slug}`);
  const data = await response.json();
  return data;
}

export default async function Page({ params }) {
  let userInfo = null;
   userInfo = await fetchUsers(params);

  return <UserFront userInfo={userInfo} />;
}
