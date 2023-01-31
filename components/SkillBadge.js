import styles from '../styles/SkillBadge.module.css';

const SkillBadge = ({ skill }) => {
  return (
    <div className={styles.container}>
      <p>{skill}</p>
    </div>
  );
};

export default SkillBadge;
