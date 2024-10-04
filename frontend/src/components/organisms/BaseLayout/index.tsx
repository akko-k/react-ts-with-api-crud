import { FC,ReactNode } from 'react';
import { Navigation } from '../../molecules/Navigation';
import styles from './styles.module.css';

type Props = {
    title: string;
    children: ReactNode,
};

export const BaseLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.common}>{children}</div>
    </div>
  );
};
