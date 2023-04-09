import React, { useEffect, useState } from 'react';
import { Props } from './Props';
import { getPhotoInfoUrl } from '../../services/flickr';
import { IPhotoInfo } from './Props';
import loading from '../../assets/loadingModal.gif';
import styles from './ModalItem.module.css';
import PhotoInfo from '../PhotoInfo/PhotoInfo';

export default function ModalItem({ idItem }: Props) {
  const [photoInfo, setPhotoInfo] = useState<IPhotoInfo>({} as IPhotoInfo);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setPhotoInfo({} as IPhotoInfo);
    fetch(getPhotoInfoUrl(idItem))
      .then((responce) => responce.json())
      .then((json) => {
        setIsLoading(false);
        setPhotoInfo(json.photo);
      });
  }, [idItem]);

  const imageLoading = <img src={loading} className={styles.loading} alt="loading" />;

  return (
    <div>
      {isLoading && imageLoading}
      {photoInfo && Object.keys(photoInfo).length !== 0 && <PhotoInfo data={photoInfo} />}
    </div>
  );
}
