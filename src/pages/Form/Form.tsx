import React, { Component } from 'react';
import styles from './Form.module.css';
import CardList from '../../components/CardList/CardList';
import { TCard, TFormData, TFormValid } from 'types';

type TState = {
  formData: TFormData;
  formValid: TFormValid;
  cardList: TCard[];
};

export default class Form extends Component {
  state: TState = {
    formData: {
      name: React.createRef(),
      male: React.createRef(),
      female: React.createRef(),
      birthday: React.createRef(),
      country: React.createRef(),
      confirmation: React.createRef(),
      photo: React.createRef(),
    },
    formValid: {
      name: true,
      gender: true,
      birthday: true,
      country: true,
      confirmation: true,
      photo: true,
    },
    cardList: [],
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCard: TCard = {
      name: this.state.formData.name.current?.value || '',
      gender: this.state.formData.male.current?.checked
        ? 'male'
        : this.state.formData.female.current?.checked
        ? 'female'
        : '',
      birthday: this.state.formData.birthday.current?.value || '',
      country: this.state.formData.country.current?.value || '',
      confirmation: this.state.formData.confirmation.current?.checked || false,
      photo: this.state.formData.photo.current?.files![0]
        ? URL.createObjectURL(this.state.formData.photo.current?.files![0])
        : '',
    };

    const newValidState = { ...this.state.formValid };
    newValidState.name = /^[a-z ,.'-]+$/i.test(newCard.name) ? true : false;
    newValidState.gender = newCard.gender ? true : false;
    newValidState.birthday = newCard.birthday ? true : false;
    newValidState.photo = newCard.photo ? true : false;
    newValidState.confirmation = newCard.confirmation;

    if (Object.values(newValidState).every((el) => el === true)) {
      this.setState({
        ...this.state,
        formValid: newValidState,
        cardList: [...this.state.cardList, newCard],
      });
      alert('data has been saved');
      e.currentTarget.reset();
    } else {
      this.setState({
        ...this.state,
        formValid: newValidState,
      });
    }
  };

  render() {
    return (
      <div className={styles.cnt}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Form:</h2>
          <label className={styles.inputContainer}>
            <p className={`${styles.title} ${this.state.formValid.name ? '' : styles.unvalid}`}>
              Name:{' '}
            </p>
            <input type="text" ref={this.state.formData.name} />
          </label>
          <div>
            <p className={`${styles.title} ${this.state.formValid.gender ? '' : styles.unvalid}`}>
              Gender:{' '}
            </p>
            <label className={styles.inputContainer}>
              <div className={styles.radioContainer}>
                <input
                  type="radio"
                  name="gender"
                  value={'male'}
                  className={styles.radio}
                  ref={this.state.formData.male}
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
                  ref={this.state.formData.female}
                />
                <p className={styles.title}>Female: </p>
              </div>
            </label>
          </div>
          <label className={styles.inputContainer}>
            <p className={`${styles.title} ${this.state.formValid.birthday ? '' : styles.unvalid}`}>
              Birthday:
            </p>
            <input
              type="date"
              max={new Date().toISOString().slice(0, -14)}
              ref={this.state.formData.birthday}
            />
          </label>
          <div>
            <p className={styles.title}>Country:</p>
            <select ref={this.state.formData.country}>
              <option>United States</option>
              <option>Mexico</option>
              <option>Canada</option>
            </select>
          </div>
          <label className={styles.inputContainer}>
            <p
              className={`${styles.title} ${
                this.state.formValid.confirmation ? '' : styles.unvalid
              }`}
            >
              Confirmation:
            </p>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" ref={this.state.formData.confirmation} />
              <p className={styles.title}>I consent to my personal data</p>
            </div>
          </label>
          <label className={`${styles.inputContainer}`}>
            <p className={`${styles.title} ${this.state.formValid.photo ? '' : styles.unvalid}`}>
              Photo:{' '}
            </p>
            <input
              type="file"
              ref={this.state.formData.photo}
              accept="image/gif, image/jpeg, image/png"
            />
          </label>
          <input className={styles.submit} type="submit" value={'submit'} />
        </form>
        <CardList items={this.state.cardList} />
      </div>
    );
  }
}
