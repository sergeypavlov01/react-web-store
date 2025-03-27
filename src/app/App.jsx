import "./styles/App.module.css";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./provider/AuthProvider";

export function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
