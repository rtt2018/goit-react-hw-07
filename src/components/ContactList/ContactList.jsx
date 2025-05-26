import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';

export default function ContactList() {

  const allContacts = useSelector((state) => state.contacts.items)
  const contactsFilter = useSelector((state) => state.filters.name)

  const filteredContacts = allContacts.filter(abonent =>
    abonent.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      {filteredContacts.length === 0
        ? <p>Dear Mentor, no such contact found, try again! )))</p>
        : (<ul className={css.contactList}>
          {filteredContacts.map(contact => {
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
