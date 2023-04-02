import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import CardList from '../../components/CardList/CardList';
import { TCard } from 'types';

export default function Form() {
  const regName = /^[a-z ,.'-]+$/i;

  const name = useRef<HTMLInputElement>(null);
  const male = useRef<HTMLInputElement>(null);
  const female = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLSelectElement>(null);
  const confirmation = useRef<HTMLInputElement>(null);
  const photo = useRef<HTMLInputElement>(null);

  const [formValid, setFormValid] = useState({
    name: true,
    gender: true,
    birthday: true,
    country: true,
    confirmation: true,
    photo: true,
  });

  const [cardList, setCardList] = useState<TCard[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCard: TCard = {
      name: name.current?.value || '',
      gender: male.current?.checked ? 'male' : female.current?.checked ? 'female' : '',
      birthday: birthday.current?.value || '',
      country: country.current?.value || '',
      confirmation: confirmation.current?.checked || false,
      photo: photo.current?.files![0] ? URL.createObjectURL(photo.current?.files![0]) : '',
    };

    const newValidState = { ...formValid };
    newValidState.name = regName.test(newCard.name) ? true : false;
    newValidState.gender = newCard.gender ? true : false;
    newValidState.birthday = newCard.birthday ? true : false;
    newValidState.photo = newCard.photo ? true : false;
    newValidState.confirmation = newCard.confirmation;

    if (Object.values(newValidState).every((el) => el === true)) {
      setFormValid(newValidState);
      setCardList([...cardList, newCard]);
      alert('data has been saved');
      e.currentTarget.reset();
    } else {
      setFormValid(newValidState);
    }
  };

  return (
    <div className={styles.cnt}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.formTitle}>Form:</h2>
        <label className={styles.inputContainer}>
          <p className={`${styles.title} ${formValid.name ? '' : styles.unvalid}`}>Name: </p>
          <input type="text" ref={name} />
        </label>
        <div>
          <p className={`${styles.title} ${formValid.gender ? '' : styles.unvalid}`}>Gender: </p>
          <label className={styles.inputContainer}>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                name="gender"
                value={'male'}
                className={styles.radio}
                ref={male}
              />
              <p className={styles.title}>Male: </p>
            </div>
          </label>
          <label className={styles.inputContainer}>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                name="gender"
                value={'female'}
                className={styles.radio}
                ref={female}
              />
              <p className={styles.title}>Female: </p>
            </div>
          </label>
        </div>
        <label className={styles.inputContainer}>
          <p className={`${styles.title} ${formValid.birthday ? '' : styles.unvalid}`}>Birthday:</p>
          <input type="date" max={new Date().toISOString().slice(0, -14)} ref={birthday} />
        </label>
        <div>
          <p className={styles.title}>Country:</p>
          <select ref={country}>
            <option>United States</option>
            <option>Mexico</option>
            <option>Canada</option>
          </select>
        </div>
        <label className={styles.inputContainer}>
          <p className={`${styles.title} ${formValid.confirmation ? '' : styles.unvalid}`}>
            Confirmation:
          </p>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" ref={confirmation} />
            <p className={styles.title}>I consent to my personal data</p>
          </div>
        </label>
        <label className={`${styles.inputContainer}`}>
          <p className={`${styles.title} ${formValid.photo ? '' : styles.unvalid}`}>Photo: </p>
          <input type="file" ref={photo} accept="image/gif, image/jpeg, image/png" />
        </label>
        <input className={styles.submit} type="submit" value={'submit'} />
      </form>
      <CardList items={cardList} />
    </div>
  );
}
