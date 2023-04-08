import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import CartList from '../../components/CartList/CartList';
import getUrl from '../../services/flickr';

export default function MainPage() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('input') || '');
  const [data, setData] = useState([]);
  useEffect(() => localStorage.setItem('input', searchValue));

  const getData = () => {
    fetch(getUrl(searchValue, '1'))
      .then((response) => response.json())
      .then((json) => setData(json.photos.photo));
  };

  useEffect(() => {
    if (searchValue) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
      <CartList data={data} />
      <p>{data.length == 0 && 'search something'}</p>
    </>
  );
}
