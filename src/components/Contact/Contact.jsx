import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from 'Redux/actions';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
