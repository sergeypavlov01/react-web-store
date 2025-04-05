import styles from "./SuccessfulOrder.module.css";

export const SuccessfulOrder = ({ firstName }) => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Successful Order</h1>
      <p className={styles.text}>
        <span>{firstName}</span>, thank you for your order.<br/> 
        Please leave a review for the product.
      </p>
    </div>
  );
};
