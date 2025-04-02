import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ball}></div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};
