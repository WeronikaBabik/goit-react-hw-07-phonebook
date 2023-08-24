import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { useState } from 'react';
import { selectGetContacts } from 'Redux/selectors';
import { addContact } from 'Redux/actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectGetContacts);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    let newContactAdded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newContactAdded) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactLabel}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        className={css.contactInput}
      />
      <label className={css.contactLabel}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
        className={css.contactInput}
      />
      <button type="submit" className={css.addContactButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
