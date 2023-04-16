import React, { useState } from 'react';
import styles from './Search.module.css';
import { setSearch } from '../../store/search/searchSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function Search() {
  const [searchValue, setSearchValue] = useState(useAppSelector((state) => state.search.search));
  const dispatch = useAppDispatch();

  return (
    <div className={styles.search}>
      <input
        data-testid="search"
        type="text"
        className={styles.input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button onClick={() => dispatch(setSearch(searchValue))}>search</button>
    </div>
  );
}
