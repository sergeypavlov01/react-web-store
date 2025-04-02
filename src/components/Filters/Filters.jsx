import styles from './Filters.module.css';
import { convertStrToLowReg } from '../../utils/string';
import { Select } from '../UI/Select/Select';
import { FilterSection } from '../FilterSection/FilterSection';
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { Button } from '../UI/Button/Button';

export const Filters = () => {
  const [price, setPrice] = useState(localStorage.getItem('price') || 250);
  const [weight, setWeight] = useState(localStorage.getItem('weight') || 'Light (under 280g)');
  const [size, setSize] = useState(localStorage.getItem('size') || 'Small');
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriceChange = (currentValue) => {
    localStorage.setItem('price', currentValue);
    setPrice(currentValue);
  }

  const handleWeightChange = (currentValue) => {
    localStorage.setItem('weight', currentValue);
    setWeight(currentValue);
  };

  const handleSizeChange = (currentValue) => {
    localStorage.setItem('size', currentValue);
    setSize(currentValue);
  };

  const handleSaveClick = () => {
    const weightStr = weight.split(' ')[0];
    const newWeightStr = convertStrToLowReg(weightStr);
    const newSizeStr = convertStrToLowReg(size);

    setSearchParams({
      price,
      weight: newWeightStr,
      size: newSizeStr,
    });
  };

  const handleResetClick = () => {
    localStorage.removeItem('price');
    localStorage.removeItem('weight');
    localStorage.removeItem('size');
    setSearchParams({})
  }

  return (
    <>
      <h2 className={styles.title}>Filters</h2>

      <FilterSection filterSectionTitle='By Price'>
        <label>
          Price: {price}$
          <input
            value={price}
            onChange={(e) => handlePriceChange(e.target.value)}
            step='10'
            type='range'
            min='0'
            max='500'
          />
        </label>
      </FilterSection>

      <FilterSection filterSectionTitle='By Weight'>
        <Select
          opt1='Light (under 280g)'
          opt2='Medium (280-310g)'
          opt3='Heavy (over 310g)'
          onChange={handleWeightChange}
          value={weight}
        />
      </FilterSection>

      <FilterSection filterSectionTitle='By Size'>
        <Select
          opt1='Small'
          opt2='Medium'
          opt3='Large'
          onChange={handleSizeChange}
          value={size}
        />
      </FilterSection>

      <div className={styles.btnContainer}>
        <Button onClick={handleSaveClick}>Save Changes</Button>
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
    </>
  );
};
