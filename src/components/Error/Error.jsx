import styles from './Error.module.css'

export const Error = ({ message }) => {
  return (
    <div className={styles.error}>
       <h1 className={styles.title}>Error</h1>
       <p className={styles.message}>{message}</p>
    </div>
  )
}