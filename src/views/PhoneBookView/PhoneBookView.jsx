import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import s from './PhoneBookView.module.css';
import Form from '../../Components/Form';
import ContactsList from '../../Components/ContactsList';
import Filter from '../../Components/Filter';
import { getContact } from '../../redux/phoneBook/phoneBook-operations';
import {
  getLoading,
  getError,
} from '../../redux/phoneBook/phoneBook-selectors';

const PhoneBookView = () => {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContact()), [dispatch]);

  return (
    <div className={s.phonebook}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {loading && (
        <Loader
          type="ThreeDots"
          color="#424141"
          height={60}
          width={60}
          timeout={3000}
        />
      )}
      {error && <p>Oops! Something went wrong...</p>}
      <ContactsList />
    </div>
  );
};

export default PhoneBookView;
