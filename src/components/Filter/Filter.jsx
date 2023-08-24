import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'Redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch(setFilter);

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        type="text"
        className={css.filterInput}
        name="name"
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
