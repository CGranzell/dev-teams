import UserFront from '@/components/UserFront';


async function fetchUsers(params) {
  const response = await fetch(`https://dummyjson.com/users/${params.slug}`);
  const data = await response.json();
  return data;
}

export default async function Page({ params }) {
  const userInfo = await fetchUsers(params);

  return <UserFront userInfo={userInfo} />;
}
