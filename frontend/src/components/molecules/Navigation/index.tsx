import { FC } from 'react';
import { NavigationLink } from '../../atoms/NavigationLink';
import { NAVIGATION_PATH } from '../../../constants/navigations';
import styles from './styles.module.css';

export const Navigation: FC = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink
          to={NAVIGATION_PATH.TOP}
          label="一覧"
        />
        <NavigationLink
          to={NAVIGATION_PATH.CREATE}
          label="新規追加"
        />
      </ul>
    </nav>
  );
};
