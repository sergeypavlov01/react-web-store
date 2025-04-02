import "./styles/App.module.css";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./provider/AuthProvider";
import { CartProvider } from "./provider/CartProvider";

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  );
}
