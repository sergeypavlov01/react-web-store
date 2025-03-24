import styles from "./Select.module.css";

export const Select = ({ opt1, opt2, opt3 }) => {
  return (
    <select className={styles.select}>
      <option>{opt1}</option>
      <option>{opt2}</option>
      <option>{opt3}</option>
    </select>
  );
};
