

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.onClose}>
      {props.children}
    </div>
  )
}

export default Backdrop