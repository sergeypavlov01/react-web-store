import styles from "./CartItem.module.css";

export const CartItem = ({
  id,
  image,
  name,
  price,
  quantity,
  update,
  remove,
}) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.picture}
        src={`/images/${image}`}
        alt="racket img"
      />
      <div className={styles.details}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.price}>
          ${price} x <span className={styles.quantity}>{quantity}</span> = $
          <span className={styles.totalItem}>
            {Math.round(price * quantity * 100) / 100}
          </span>
        </p>
      </div>
      <div className={styles.actions}>
        <button
          onClick={() => update(id, "increase")}
          className={styles.btnAdd}
        >
          +
        </button>
        <input value={quantity || 0} type="number" min="1" readOnly />
        <button
          onClick={() => update(id, "decrease")}
          className={styles.btnRemove}
        >
          -
        </button>
        <button
          onClick={() => remove(id)}
          style={{ marginLeft: "0.80rem" }}
          className={styles.btnRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
