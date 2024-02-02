import React from 'react';
import styles from './InputInsurance.module.scss';

const InputInsurance = ({ placeholder, valueInput, onChange }) => (
  <input
    className={styles.input}
    type="text"
    placeholder={placeholder}
    value={valueInput}
    onChange={e => onChange(e.target.value)}
  />
);
export default InputInsurance;
