import styles from "./ContactsSection.module.css";
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactsSection = () => {
  return (
    <div className="container-center">
      <section className={styles.contacts}>
        <h1 className={styles.title}>Our Contacts</h1>
        <div className={styles.info}>
          <ContactItem title="Phone Number" desc="(123) 456-7890" />
          <ContactItem title="Email" desc="racketshop@gmail.com" />
          <ContactItem
            title="Address"
            desc="123 Tennis Lane, Sports City, CA 90210"
          />
        </div>
      </section>
    </div>
  );
};
