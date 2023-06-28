import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';

import {  useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import css from '../components/App.module.css';



export const Contacts = () => {

// const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error)

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

    return (
    <div className={css.phonebookWrap}>
    <Helmet>
        <h1 className={css.maineTitle}>Phonebook</h1>
    </Helmet>
        <ContactForm />
            <Filter />
            <h2 className={css.sectionTitle}>Contacts</h2>
        <div>{isLoading && 'Request in progress...'}</div>
          <ContactList/>  

    </div>
  )
 }


