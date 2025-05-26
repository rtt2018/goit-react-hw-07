import './App.css'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

export default function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="componentsAllWrap">
        <div className="componentsWrap">
          <ContactForm />
          <SearchBox />
        </div>
        <div className="componentsWrap">
          <ContactList />
        </div>
      </div>
    </div>
  )
}
