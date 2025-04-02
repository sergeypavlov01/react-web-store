import styles from "./CartSection.module.css";
import { useCart } from "../../hook/useCart";
import { CartItem } from "../CartItem/CartItem";
import { useFetching } from "../../hook/useFetching";
import { getProductById } from "../../api/index";
import { useEffect, useState } from "react";

export const CartSection = () => {
  const { cart } = useCart();
  const [products, setProducts] = useState([]);
  const { fetchData, error, isLoading } = useFetching(async () => {
    
  });

  useEffect(() => {
    fetchData();
  }, [cart, fetchData]);

  return (
    <section className={styles.cart}>
      <h1 className={styles.title}>Your Cart</h1>
      <div className={styles.content}>
        <div className={styles.items}>
          <CartItem />
          <CartItem />
        </div>
        <aside className={styles.summary}>
          <h2 className={styles.summaryTitle}>Cart Summary</h2>
          <p>
            Total: $<span className={styles.total}>709.97</span>
          </p>
          <button className={styles.btnCheckout}>Order Now</button>
        </aside>
      </div>
    </section>
  );
};

/*

const { fetchData, error, isLoading } = useFetching(async () => {
    // const responses = await Promise.all(
    //   cart.map((prod) => (
    //     getProductById(prod.id)
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw new Error('Loading Error');
    //       }
    //       return res.json()
    //     })
    //   ))
    // )
    // console.log(responses)
    // setProducts(responses.map((prod, index) => (
    //   {...prod, quantity: cart[index].quantity}
    // )))
  })

  useEffect(() => {
    fetchData();
  }, [cart, fetchData])
*/
