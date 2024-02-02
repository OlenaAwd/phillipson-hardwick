import React from 'react';
import styles from './Button.module.scss';
import boldArrow from '../../images/bold-arrow-button.svg';

const Button = ({
  classes,
  onClick,
  children,
  color = 'blue',
  disabled = false,
  display = '',
}) => {
  const onClickHandler = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      className={`${styles.button} ${classes && classes} ${
        color === 'blue' ? styles.blue : styles.green
      } ${display === 'form' && styles.next} ${disabled && styles.disabled}`}
      onClick={onClickHandler}
    >
      <span className={styles.buttonText}>{children}</span>
      <img className={styles.buttonImg} src={boldArrow} alt="arrow" />
    </button>
  );
};

export default Button;
