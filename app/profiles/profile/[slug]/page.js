import { userJson } from "../../../frontend/page";


function fetchuserInfo(params) {
  // API call, DB Query, fetch from the app

  const userInfo = userJson.users?.find(
    (user) => user.id == params.slug
  );

  return userInfo;
}

export default async function Page({ params }) {
  const userInfo = fetchuserInfo(params);
  // console.log(userInfo);

  const { id, title, firstName } = userInfo;

  return (
    <div >
      <h3 >{id}</h3>
      <h5 >About: { title }</h5>
      <h5 >First name: { firstName }</h5>
      {/* {sessions &&
        sessions.map(({  id }) => (
          <div key={id}>
            <h5 >Session: {id}</h5>
          </div>
        ))} */}
    </div>
  );
}