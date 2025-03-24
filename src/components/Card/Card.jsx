import styles from "./Card.module.css";

export const Card = ({ image, title, price }) => {
  return (
    <div className={styles.card}>
      <div className="info">
        <img
          src={"/images/" + image}
          className={styles.image}
          alt="racket-image"
          loading="lazy"
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{price}$</p>
      </div>
      <button className={styles.btn}>Add to cart</button>
    </div>
  );
};
