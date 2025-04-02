import { useNavigate } from "react-router";
import { useCart } from "../../hook/useCart";
import styles from "./Card.module.css";

export const Card = ({ id, image, name, price }) => {
  const navigate = useNavigate();
  const { addToCard } = useCart();

  const handleCardClick = (e, path) => {
    e.stopPropagation();
    navigate(path);
  }

  const handleButtonClick = (e) => {
    e.stopPropagation();
    addToCard({id: id})
  }

  return (
    <div onClick={(e) => handleCardClick(e, `/product/${id}`)} className={styles.card}>
      <div className="info">
        <img
          src={"images/" + image}
          className={styles.image}
          alt="racket-image"
          loading="lazy"
        />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>${price}</p>
      </div>
      <button onClick={(e) => handleButtonClick(e)} className={styles.btn}>Add to cart</button>
    </div>
  );
};
