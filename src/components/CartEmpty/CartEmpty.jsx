import { Link } from 'react-router'
import styles from './CartEmpty.module.css'

export const CartEmpty = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your cart is empty</h1>
      <p className={styles.text}>Use the catalog or search on the <Link to='/'>main</Link> page</p>
    </div>
  )
}