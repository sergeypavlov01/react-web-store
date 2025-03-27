import styles from "./FormGroup.module.css";

export const FormGroup = ({ label, ...inputProps }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.fieldName} htmlFor={inputProps.id}>
        {label}
      </label>
      <input className={styles.field} {...inputProps} />
    </div>
  );
};
