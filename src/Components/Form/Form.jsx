import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/phoneBook/phoneBook-operations';
import shortid from 'shortid';
import s from './Form.module.css';
import { Button } from 'react-bootstrap';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Field type ${name} is not processed`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Enter name and phone number!');
      return;
    }
    // onSubmit();

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className={s.label}>
        Name
        <input
          type="text"
          name="name"
          className={s.input}
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId} className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          className={s.input}
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </label>

      <Button variant="primary" type="submit" className={s.add_btn}>
        Add contact
      </Button>
    </form>
  );
};

export default Form;
