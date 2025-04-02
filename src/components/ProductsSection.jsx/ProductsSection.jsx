import styles from "./Products.module.css";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../Error/Error";
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { useFetching } from "../../hook/useFetching";
import { getAllProducts } from "../../api";
import { useSearchParams } from "react-router";

export const ProductsSection = () => {
  const [searchParams] = useSearchParams();
  const priceParam = searchParams.get("price");
  const weightParam = searchParams.get("weight");
  const sizeParam = searchParams.get("size");
  const [products, setProducts] = useState([]);
  const { fetchData, error, isLoading } = useFetching(async () => {
    const res = await getAllProducts();
    if (!res.ok) {
      throw new Error("Loading Error");
    }
    const products = await res.json();
    setProducts(products);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {error && <Error message={error} />}
      <section className={styles.products}>
        {products &&
          products
            .filter(({ price, weight, size }) => {
              let passesPrice = true;
              let passesWeight = true;
              let passesSize = true;

              if (priceParam) {
                passesPrice = price >= priceParam;
              }
              
              if (weightParam) {
                if (weightParam === 'light') passesWeight = weight < 280;
                else if (weightParam === 'medium') passesWeight = weight >= 280 && weight < 310;
                else if (weightParam === 'heavy') passesWeight = weight >= 310;
              }

              if (sizeParam) {
                if (sizeParam === 'small') passesSize = size >= 17 && size < 27;
                else if (sizeParam === 'medium') passesSize = size >= 27 && size < 29;
                else if (sizeParam === 'large') passesSize = size >= 29;
              }

              return passesPrice && passesWeight && passesSize
            })
            .map(({ id, image, name, price }) => (
              <Card key={id} id={id} image={image} name={name} price={price} />
            ))}
      </section>
    </>
  );
};
