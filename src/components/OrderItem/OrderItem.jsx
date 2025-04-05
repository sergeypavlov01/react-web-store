import styles from './OrderItem.module.css'

export const OrderItem = ({ name, quantity }) => {
  return <li className={styles.orderItem}>{name} x <span className={styles.quantity}>{quantity} piece(s)</span></li>
}