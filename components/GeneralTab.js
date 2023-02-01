

const GeneralTab = ({ title, userInfo }) => {
  const { firstName, lastName, maidenName, age, gender , birthDate } = userInfo;
  return (
    <div>
      <h3>{title}</h3>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{maidenName}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{birthDate}</p>
    </div>
  )
}

export default GeneralTab