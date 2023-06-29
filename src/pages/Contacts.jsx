import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';

import { useSelector } from 'react-redux';
import css from '../components/App.module.css';



export default function Contacts() {


  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error)


    return (
    <div className={css.phonebookWrap}>
        <h1 className={css.maineTitle}>Phonebook</h1>
        <ContactForm />
            <Filter />
        <h2 className={css.sectionTitle}>Contacts</h2>
        <div>{error && {error} }</div>
        <div>{isLoading && 'Request in progress...'}</div>
          <ContactList/>  

    </div>
  )
 }


