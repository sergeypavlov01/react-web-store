import { useState } from "react"
import { CartContext } from "../../context/CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCard = (product) => {
    setCart((prev) => {
      const existingProd = prev.find((item) => item.id === product.id)

      if (existingProd) {
        return prev.map((item) => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCard, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}