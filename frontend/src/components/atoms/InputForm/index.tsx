import { FC } from 'react';
import style from './styles.module.css';

type Props = JSX.IntrinsicElements['input'];

export const InputForm: FC<Props> = ({
  value,
  disabled = false,
  placeholder,
  onChange,
}) => (
  <input
    className={style.input}
    type="text"
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    onChange={onChange}
    readOnly={!onChange}
  />
);
