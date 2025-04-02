import { ContactsPage } from "../../pages/ContactsPage";
import { CartPage } from "../../pages/CartPage";
import { LoginPage } from "../../pages/LoginPage";
import { OrderPage } from "../../pages/OrderPage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
import { ProfilePage } from "../../pages/ProfilePage";

const publicRouter = [
  { id: 1, path: 'contacts', element: <ContactsPage />},
  { id: 2, path: 'product/:id', element: <ProductDetailsPage />},
  { id: 3, path: 'cart', element: <CartPage />},
  { id: 4, path: 'login', element: <LoginPage />},
]

const privateRouter = [
  { id: 1, path: 'profile', element: <ProfilePage />},
  { id: 2, path: 'order', element: <OrderPage />},
]

export { publicRouter, privateRouter }