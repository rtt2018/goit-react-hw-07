import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectLoading } from '../../redux/contactsSlice.js';

export default function ContactList() {

  const allContacts = useSelector(selectFilteredContacts)
  const isLoading = useSelector(selectLoading);

  return (
    <div className={css.container}>
      {isLoading && <p>Please, vait. Loading contacts...</p>}
      {allContacts.length > 0 && (<ul className={css.contactList}>
        {allContacts.map(contact => <Contact people={contact} key={contact.id} />)}
      </ul>)
      }
      {allContacts.length === 0 && !isLoading && <p className={css.noContacts}>No contacts found. Please, use some other search phrase</p>}
    </div>
  );
}
