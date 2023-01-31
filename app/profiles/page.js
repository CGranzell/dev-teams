

import Link from "next/link";

export let speakerJson = {};

// Static data fetching
async function fetchSpeakers() {
  const response = await fetch(
    "https://dummyjson.com/users"
  );
  

  const data = await response.json();
  speakerJson = data;
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <div>
      
     
      
      {data.users.map(({ id }) => (
        <div key={id} >
          <Link
            
            href={`/profiles/profile/${id}`}
          >
            <h3 >{id}</h3>
          </Link>
         
        </div>
      ))}
    </div>
  );
}