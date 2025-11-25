import type { FC } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styles from './buttonCTA.module.css';

interface ButtonCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  type?: 'button' | 'submit';
}

const ButtonCTA: FC<ButtonCTAProps> = ({ onClick, type = 'button', ...rest }) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      {...rest}
    >
      Получить консультацию
    </button>
  );
};

export default ButtonCTA;