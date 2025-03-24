import { useEffect, useState } from 'react';
import { Card } from '../Card/Card'
import styles from './Products.module.css'

export const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((products) => setProducts(products))
    .catch((error) => console.log(error))
  }, [])

  return (
    <section className={styles.products}>
      {products && products.map(({id, image, title, price}) => (
        <Card key={id} image={image} title={title} price={price}/>
      ))}
    </section>
  )
}