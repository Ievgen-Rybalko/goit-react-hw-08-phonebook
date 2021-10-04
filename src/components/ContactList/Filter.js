import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contact-selectors';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contact-actions';

import styles from './ContactList.module.css';

const Filter = ({ message }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div style={{ width: '450px' }}>
      <p className={styles.message}>{message}</p>
      <input
        className={styles.input}
        type="text"
        value={filter}
        placeholder="Type to search..."
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </div>
  );
};

Filter.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Filter;
