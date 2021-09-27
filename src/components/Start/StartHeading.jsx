import styles from './StartHeading.module.css';

const Header = () => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>Lost in Translation</h1>
      <p className={styles.headingText}>Get Started</p>
    </div>
  );
};
export default Header;