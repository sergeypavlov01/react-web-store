import styles from "./CartSection.module.css";
import { Loader } from "../UI/Loader/Loader";
import { useCart } from "../../hook/useCart";
import { CartItem } from "../CartItem/CartItem";
import { useFetching } from "../../hook/useFetching";
import { getProductById } from "../../api/index";
import { useEffect, useMemo, useState } from "react";
import { CartEmpty } from "../CartEmpty/CartEmpty";
import { Link } from "react-router";

export const CartSection = () => {
  const { cart, removeFromCart } = useCart();
  const [products, setProducts] = useState([]);
  const [totalInCart, setTotalInCart] = useState(0);
  const [total, setTotal] = useState(0);
  const { fetchData, error, isLoading } = useFetching(async () => {
    const currentProducts = await Promise.all(
      cart.map((prod) => {
        return getProductById(prod.id).then((res) => res.json());
      })
    );

    const productsWithQuantity = currentProducts.map((prod, index) => ({
      ...prod,
      quantity: cart[index].quantity,
    }));

    setProducts(productsWithQuantity);
  });

  const handleUpdateQuantity = (id, action) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          if (action === "increase") {
            return { ...product, quantity: product.quantity + 1 };
          } else if (action === "decrease" && product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          }
        }
        return product;
      })
    );
  };

  const handleRemoveProduct = (id) => {
    const newProducts = products.filter((product) => {
      return product.id !== id
    })

    removeFromCart(id);
    setProducts(newProducts);
  }

  useEffect(() => {
    fetchData();
  }, [cart]);

  useMemo(() => {
    if (products.length > 0) {
      setTotalInCart(
        products.reduce((acc, prod) => {
          return acc + prod.quantity
        }, 0)
      );
      setTotal(
        products.reduce((acc, prod) => {
          return acc + prod.price * prod.quantity;
        }, 0)
      );
    }
  }, [products]);

  return (
    <section className={styles.cart}>
      <h1 className={styles.title}>Your Cart</h1>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {products.length > 0 ? (
        <>
          <h2 className={styles.subtitle}>
            Total in cart: <span>{totalInCart}</span>
          </h2>
          <div className={styles.content}>
            <div className={styles.items}>
              {products.map(({ id, image, name, price, quantity }) => {
                return (
                  <CartItem
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    price={price}
                    quantity={quantity}
                    update={handleUpdateQuantity}
                    remove={handleRemoveProduct}
                  />
                );
              })}
            </div>
            <aside className={styles.summary}>
              <h2 className={styles.summaryTitle}>Cart Summary</h2>
              <p>
                Total: $<span className={styles.total}>{total.toFixed(2)}</span>
              </p>
              <Link to='/order' state={{products, total}} className={styles.btnCheckout}>Order Now</Link>
            </aside>
          </div>
        </>
      ) : (
        <CartEmpty />
      )}
    </section>
  );
};
