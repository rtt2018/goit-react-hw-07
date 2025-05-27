import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';

export default function ContactList() {

  const allContacts = useSelector(selectFilteredContacts)

  return (
    <div className={css.container}>
      {allContacts.length === 0
        ? <p>Please, vait. Loading contacts...</p>
        : (<ul className={css.contactList}>
          {allContacts.map(contact => {
            return (
              <li key={contact.id} className={css.listItem}>
                <Contact people={contact} />
              </li>
            )
          })}
        </ul>)
      }
    </div>
  );
}
