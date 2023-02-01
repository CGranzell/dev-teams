

const ContactTab = ({ title, userInfo }) => {
  const { email, phone, address , postalCode, state} = userInfo;
  return (
    <div>
      <h3>{title}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address.address}</p>
      <p>{address.city}</p>
      <p>{postalCode}</p>
      <p>{state}</p>
    </div>
  )
}

export default ContactTab