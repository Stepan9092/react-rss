import React from 'react';
import styles from './Search.module.css';
import { Props } from './Props';

export default function Search({ searchValue, setSearchValue, getData }: Props) {
  return (
    <div className={styles.search}>
      <input
        data-testid="search"
        type="text"
        className={styles.input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button onClick={() => getData()}>search</button>
    </div>
  );
}
