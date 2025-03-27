import styles from "./ContactItem.module.css";

export const ContactItem = ({ title, desc }) => {
  return (
    <div className={styles.contactItem}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};
