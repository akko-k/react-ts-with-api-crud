import { FC } from 'react';
import styles from './styles.module.css';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};
/**
 * SearchForm component.
 *
 * @component
 * @param {Object} props
 * @returns {JSX.Element} The rendered SearchForm component.
 */
export const SearchForm: FC<Props> = (props) => {
  const { value, placeholder, onChange } = props;
  return (
    <div className={styles.searchContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        className={styles.searchIcon}
      />
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
