import styles from "./CartItem.module.css";

export const CartItem = () => {
  return (
    <div className={styles.item}>
      <img className={styles.picture} src={null} alt="racket img" />
      <div className={styles.details}>
        <h2 className={styles.name}>Wilson Pro Staff RF97</h2>
        <p className={styles.price}>
          $249.99 x <span className={styles.quantity}>1</span> = $
          <span className={styles.totalItem}>249.99</span>
        </p>
      </div>
      <div className={styles.actions}>
        <button className={styles.btnAdd}>+</button>
        <input type="number" min="1"/>
        <button className={styles.btnRemove}>-</button>
      </div>
    </div>
  );
};
