import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type Props = {  to: string;  label: string;};

export const NavigationLink:FC<Props> = ({ to, label }) => {
  return (
    <li className={styles.navItem}>
      <Link className={styles.navLink} to={to}>
        {label}
      </Link>
    </li>
  );
};