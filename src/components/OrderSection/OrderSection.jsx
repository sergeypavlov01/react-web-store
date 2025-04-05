import { useLocation } from "react-router";
import { OrderFormGroup } from "../OrderFormGroup/OrderFormGroup";
import { OrderItem } from "../OrderItem/OrderItem";
import styles from "./OrderSection.module.css";
import { useState } from "react";
import { SuccessfulOrder } from "../SuccessfulOrder/SuccessfulOrder";

export const OrderSection = () => {
  const location = useLocation();
  const [firstName, setFirstName] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const products = location?.state?.products;
  const total = location?.state?.total;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFirstName(formData.get('first-name'));
    setIsSubmitting(true);
  }

  return (
    <section className={styles.order}>
      <h1 className={styles.title}>Your Order</h1>
      {!isSubmitting ? 
        <div className={styles.content}>
        <div className={styles.items}>
          <h2 className={styles.subtitle}>Order Details</h2>
          <ul className={styles.orderList}>
            {products && products.map(({ id, name, quantity }) => (
              <OrderItem key={id} name={name} quantity={quantity}/>
            ))}
          </ul>
          <p className={styles.total}>
            Total Cost:  
            <span className={styles.totalOrder}> ${total && total.toFixed(2)}</span>
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <h2 className={styles.subtitle}>Shipping Information</h2>
          <OrderFormGroup
            label="First Name:"
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            isRequired={true}
          />
          <OrderFormGroup
            label="Last Name:"
            id="last-name"
            type="text"
            placeholder="Enter your last name"
            isRequired={true}
          />
          <OrderFormGroup
            label="Address:"
            id="address"
            type="text"
            placeholder="Enter your address name"
            isRequired={true}
          />
          <OrderFormGroup
            label="Email:"
            id="email"
            type="text"
            placeholder="Enter your email"
            isRequired={true}
          />
          <OrderFormGroup
            label="Phone:"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            isRequired={true}
          />
          <OrderFormGroup isGroupSelect={true}>
            <option value="">Select delivery method</option>
            <option value="standard">Standard (5-7 days)</option>
            <option value="express">Express (1-2 days)</option>
          </OrderFormGroup>

          <button type="submit" className={styles.submitBtn}>
            Place Order
          </button>
        </form>
      </div> : 
      <SuccessfulOrder firstName={firstName}/>
      }
    </section>
  );
};
