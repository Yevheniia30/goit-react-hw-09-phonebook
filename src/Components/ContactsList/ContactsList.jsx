import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/phoneBook/phoneBook-operations';
import { getFilteredContacts } from '../../redux/phoneBook/phoneBook-selectors';

import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import { Button } from 'react-bootstrap';

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDelete = useCallback(id => dispatch(deleteContact(id)), [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.name}>{name}:</span>{' '}
          <span className={s.number}>{number}</span>
          <Button
            className={s.btn}
            variant="outline-secondary"
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
