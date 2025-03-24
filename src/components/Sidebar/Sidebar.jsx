import styles from "./Sidebar.module.css";
import { Filters } from "../Filters/Filters";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Filters />
    </aside>
  );
};
