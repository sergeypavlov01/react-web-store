import styles from "./ProductDetailsSection.module.css";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../Error/Error";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useFetching } from "../../hook/useFetching";
import { getProductById } from "../../api";

export const ProductDetailsSection = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { fetchData, error, isLoading } = useFetching(async () => {
    const res = await getProductById(id);
    if (!res.ok) {
      throw new Error("Loading Error");
    }
    const product = await res.json();
    setProduct(product);
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {error && (
        <Error message={error}/>
      )}
      {product && (
        <section className={styles.product}>
          <div className={styles.details}>
            <div className={styles.image}>
              <img className={styles.picture} src={"/images/" + product.image} alt="product img" loading="lazy"/>
            </div>
            <div className={styles.info}>
              <h1 className={styles.name}>{product.name}</h1>
              <p className={styles.price}>${product.price}</p>
              <p className={styles.desc}>
                {product.desc}
              </p>
              <div className={styles.specs}>
                <p className={styles.spec}>
                  <strong>Size: </strong>
                  <span className={styles.size}>{product.size} inches</span>
                </p>
                <p className={styles.spec}>
                  <strong>Weight: </strong>
                  <span className={styles.weight}>{product.weight} grams</span>
                </p>
              </div>
              <button className={styles.btn}>Add to Cart</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
