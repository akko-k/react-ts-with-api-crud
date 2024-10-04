import { FC } from 'react';
import style from './styles.module.css';

type Props = JSX.IntrinsicElements['textarea'];

export const TextArea:FC<Props> = ({
  value,
  disabled = false,
  placeholder,
  onChange,
}) => (
  <textarea
    className={style.text}
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    onChange={onChange}
    readOnly={!onChange}
  />
);
