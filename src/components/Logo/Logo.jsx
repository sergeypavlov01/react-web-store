import { Link } from "react-router";
import styles from "./Logo.module.css";

export const Logo = ({ children }) => {
  return (
    <Link to="/" className="link">
      <div className={styles.logo}>{children}</div>
    </Link>
  );
};
