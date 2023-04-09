import React from 'react';
import { Props } from './Props';
import { getPhotoUrl } from '../../services/flickr';
import styles from './PhotoInfo.module.css';

export default function PhotoInfo({ data }: Props) {
  return (
    <div className={styles.info}>
      <img
        className={styles.image}
        src={getPhotoUrl(data.id, data.server, data.secret)}
        alt="photo"
      />
      <div className={styles.text}>Title: {data.title._content}</div>
      <div className={styles.text}>Owner: {data.owner.username}</div>
      <div className={styles.text}>Description: {data.description._content || 'none'}</div>
      <div className={styles.text}>Date: {data.dates.taken}</div>
    </div>
  );
}
