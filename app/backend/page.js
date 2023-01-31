import Link from "next/link";

export let backendJson = {};

// Static data fetching
async function fetchUsers() {
  const response = await fetch(
    "https://dummyjson.com/users"
  );
  

  const data = await response.json();
  backendJson = data;
  return data;
}

export default async function Page() {
  const data = await fetchUsers();

  return (
    <div>
      {data.users.map(({ id,  }) => (
        <div key={id} >
          <Link
            href={`../profiles/profile/${id}`}
          >
            <h3 >{id}</h3>
          </Link>
         
        </div>
      ))}
    </div>
  );
}