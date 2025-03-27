import { Select } from "../UI/Select/Select";
import { FilterSection } from "../FilterSection/FilterSection";
import styles from "./Filters.module.css";
import { useState } from "react";
  
export const Filters = () => {
  const [price, setPrice] = useState(250);

  return (
    <>
      <h2 className={styles.title}>Filters</h2>

      <FilterSection filterSectionTitle="By Price">
        <label>
          Price: {price}$
          <input value={price} onChange={(e) => setPrice(e.target.value)} step="10" type="range" min="0" max="500" />
        </label>
      </FilterSection>

      <FilterSection filterSectionTitle="By Weight">
        <Select
          opt1="Light (under 280g)"
          opt2="Medium (280-310g)"
          opt3="Heavy (over 310g)"
        />
      </FilterSection>

      <FilterSection filterSectionTitle="By Size">
        <Select opt1="Small" opt2="Medium" opt3="Large" />
      </FilterSection>
    </>
  );
};
