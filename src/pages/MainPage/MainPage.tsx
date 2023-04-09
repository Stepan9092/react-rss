import React, { useEffect, useState } from 'react';
import CartList from '../../components/CartList/CartList';
import getDataUrl from '../../services/flickr';
import Search from '../../components/Search/Search';

export default function MainPage() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('input') || '');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => localStorage.setItem('input', searchValue));
  useEffect(() => {
    if (searchValue) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    setData([]);
    if (searchValue) {
      setIsLoading(true);
      fetch(getDataUrl(searchValue, '1'))
        .then((response) => response.json())
        .then((json) => {
          setData(json.photos.photo);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} getData={getData} />
      <CartList data={data} isLoading={isLoading} />
    </>
  );
}
