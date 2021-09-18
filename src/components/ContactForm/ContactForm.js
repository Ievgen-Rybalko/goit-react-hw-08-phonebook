import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contact-selectors';
import { addContact } from '../../redux/contacts/contact-operations';
//import PropTypes from 'prop-types';
//import actions from '../../redux/contacts/contact-actions';
import styles from './ContactForm.module.css';

function ContactForm() {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Type of input cannot be handled!`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    //onFormSubmit(this.state);
    dispatch(addContact(contacts, name, number));
    reset();
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={styles.title}>
          Name
          <input
            className={styles.button}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.title}>
          Number
          <input
            className={styles.button}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={styles.button + ' ' + styles.small}>
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

// ContactForm.propTypes = {
//   onNewContactAdd: PropTypes.func,
// };

/*class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.props.onNewContactAdd(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.title}>
            Name
            <input
              className={styles.button}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label className={styles.title}>
            Number
            <input
              className={styles.button}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button type="submit" className={styles.button + ' ' + styles.small}>
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}*/
