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
      <div className={styles.text}>
        {' '}
        <span>Title:</span> {data.title._content}
      </div>
      <div className={styles.text}>
        {' '}
        <span>Owner:</span> {data.owner.username}
      </div>
      <div className={styles.text}>
        {' '}
        <span>Description:</span> {data.description._content || 'none'}
      </div>
      <div className={styles.text}>
        {' '}
        <span>Date:</span> {data.dates.taken}
      </div>
    </div>
  );
}
