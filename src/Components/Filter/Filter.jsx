import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContact,
  filterContact,
} from '../../redux/phoneBook/phoneBook-actions';
import { getFilter } from '../../redux/phoneBook/phoneBook-selectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // useCallback мемоизирует функцию
  const onChange = useCallback(e => dispatch(filterContact(e.target.value)), [
    dispatch,
  ]);

  return (
    <div className={s.filter}>
      <label htmlFor="" className={s.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Search"
          className={s.input}
          value={filter}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
