import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectGetContacts, selectGetFilter } from 'Redux/selectors';
import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/actions';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectGetContacts);
  const filter = useSelector(selectGetFilter);

  const getFilteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      {filteredContacts.length !== 0 ? (
        <ul className={css.listOfContacts}>
          {filteredContacts.map(({ name, number, id }) => (
            <li key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
};

export default ContactList;
