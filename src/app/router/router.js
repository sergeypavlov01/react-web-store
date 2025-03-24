import { ContactsPage } from "../../pages/ContactsPage";
import { LoginPage } from "../../pages/LoginPage";
import { OrderPage } from "../../pages/OrderPage";
import { ProductPage } from "../../pages/ProductPage";
import { ProfilePage } from "../../pages/ProfilePage";

export const router = [
  { id: 1, path: 'contacts', element: <ContactsPage />, isPrivate: false},
  { id: 2, path: 'product', element: <ProductPage />, isPrivate: false},
  { id: 3, path: 'cart', element: <ContactsPage />, isPrivate: false},
  { id: 4, path: 'profile', element: <ProfilePage />, isPrivate: true},
  { id: 5, path: 'order', element: <OrderPage />, isPrivate: true},
  { id: 6, path: 'login', element: <LoginPage />, isPrivate: false},
]