import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/profile"
          >
            Account
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
