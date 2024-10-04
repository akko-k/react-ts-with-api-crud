import { FC } from 'react';
import styles from './styles.module.css';

type Props = JSX.IntrinsicElements['button']& {
    label: string;
  };
    
export const CommonButton: FC<Props> = ({ type, label, onClick }) => {
  return (
    <div>
      <button
        type={type}
        className={styles.button}
        onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
