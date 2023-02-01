import styles from '../styles/TabButton.module.css'

const TabButton = ({ title }) => {
  return (
    <button className={styles.container}>{ title }</button>
  )
}

export default TabButton