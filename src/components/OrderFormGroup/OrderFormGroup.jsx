import styles from "./OrderFormGroup.module.css";

export const OrderFormGroup = ({
  children,
  label,
  id,
  type,
  name = id,
  placeholder,
  isRequired = false,
  isGroupSelect = false,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}</label>
      {!isGroupSelect ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={isRequired}
        />
      ) : (
        <select id={id} name={name} required={isRequired}>
          {children}
        </select>
      )}
    </div>
  );
};
