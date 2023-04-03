import React, { useState } from 'react';
import styles from './Form.module.css';
import CardList from '../../components/CardList/CardList';
import { ICard, IData } from 'types';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IData>();

  const [cardList, setCardList] = useState<ICard[]>([]);

  const onSubmit = (data: IData) => {
    const reader = new FileReader();
    const file = data.photo[0] as File;
    reader.onloadend = () => {
      const newCard: ICard = {
        photo: reader.result as string,
        name: data.name,
        gender: data.gender,
        birthday: data.birthday,
        country: data.country,
        confirmation: data.confirmation,
      };
      setCardList([...cardList, newCard]);
    };
    reader.readAsDataURL(file);
    console.log(errors);

    reset();
  };

  return (
    <div className={styles.cnt}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.formTitle}>Form:</h2>
        <label className={styles.inputContainer}>
          <p className={`${styles.title} ${errors?.name && styles.unvalid}`}>Name: </p>
          <input
            {...register('name', {
              required: true,
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: 'error',
              },
            })}
          />
        </label>
        <div>
          <p className={`${styles.title} ${errors?.gender && styles.unvalid}`}>Gender: </p>
          <label className={styles.inputContainer}>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                className={styles.radio}
                value="male"
                {...register('gender', { required: true })}
              />
              <p className={styles.title}>Male: </p>
            </div>
          </label>
          <label className={styles.inputContainer}>
            <div className={styles.radioContainer}>
              <input {...register('gender')} type="radio" value="female" className={styles.radio} />
              <p className={styles.title}>Female: </p>
            </div>
          </label>
        </div>
        <label className={styles.inputContainer}>
          <p className={`${styles.title} ${errors?.birthday && styles.unvalid}`}>Birthday:</p>
          <input
            {...register('birthday', { required: true })}
            type="date"
            max={new Date().toISOString().slice(0, -14)}
          />
        </label>
        <div>
          <p className={styles.title}>Country:</p>
          <select {...register('country')}>
            <option>United States</option>
            <option>Mexico</option>
            <option>Canada</option>
          </select>
        </div>
        <label className={styles.inputContainer}>
          <p className={`${styles.title} ${errors?.confirmation && styles.unvalid}`}>
            Confirmation:
          </p>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" {...register('confirmation', { required: true })} />
            <p className={styles.title}>I consent to my personal data</p>
          </div>
        </label>
        <label className={`${styles.inputContainer}`}>
          <p className={`${styles.title} ${errors?.photo && styles.unvalid}`}>Photo: </p>
          <input
            {...register('photo', { required: true })}
            type="file"
            accept="image/gif, image/jpeg, image/png"
          />
        </label>
        <input className={styles.submit} type="submit" value={'submit'} />
      </form>
      <CardList items={cardList} />
    </div>
  );
}
