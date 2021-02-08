import { useSelector, useDispatch } from 'react-redux';
// import { MdPhoneForwarded } from 'react-icons/md';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import s from './Contacts.module.css';

function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.container}>
          <p className={s.name}>
            {name}: {number}{' '}
          </p>

          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
