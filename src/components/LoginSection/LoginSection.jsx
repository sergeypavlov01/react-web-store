import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../hook/useAuth";
import { FormGroup } from "../FormGroup/FormGroup";
import styles from "./LoginSection.module.css";
import { useState } from "react";

export const LoginSection = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();

  const back = location?.state?.from?.pathname || "/";

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");

      if (!res.ok) {
        throw new Error("User loading error");
      }

      const users = await res.json();
      return users;
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const users = await fetchUsers();
      if (!users) return;

      const user = users.find((u) => {
        return u.account.email === email && u.account.password === password;
      });

      if (user) {
        if (error) setError(null);
        login(user, () => {
          navigate(back);
        });
      } else {
        setError("Неверный email или пароль");
      }
    } catch (error) {
      setError(error.message || "Ошибка сервера");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.login}>
      <h1 className={styles.title}>Login</h1>

      <form onSubmit={handleSubmit} method="post" className={styles.loginForm}>
        <FormGroup
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required={true}
        />
        <FormGroup
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required={true}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.btn} disabled={isLoading} type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </section>
  );
};
