import styles from "./LoginSection.module.css";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../Error/Error";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../hook/useAuth";
import { FormGroup } from "../FormGroup/FormGroup";
import { useEffect, useState } from "react";
import { useFetching } from "../../hook/useFetching";
import { getAllUsers } from "../../api";

export const LoginSection = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();
  const [users, setUsers] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const { fetchData, error, isLoading } = useFetching(async () => {
    const res = await getAllUsers();
    if (!res.ok) {
      throw new Error("Loading Error");
    }
    const users = await res.json();
    setUsers(users);
  });

  useEffect(() => {
    fetchData();
  }, []);

  const back = location?.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!users) return;

    const user = users.find((u) => {
      return u.account.email === email && u.account.password === password;
    });

    if (user) {
      login(user, () => {
        navigate(back);
      });
    } else {
      setLoginError('Incorrect login or password')
    }
  };

  return (
    <>
      {error && <Error message={error}/>}
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.login}>
          <h1 className={styles.title}>Login</h1>

          <form
            onSubmit={handleSubmit}
            method="post"
            className={styles.loginForm}
          >
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

            {loginError && <p className={styles.error}>{loginError}</p>}

            <button className={styles.btn} disabled={isLoading} type="submit">
              Login
            </button>
          </form>
        </section>
      )}
    </>
  );
};
