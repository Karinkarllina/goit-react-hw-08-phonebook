import { useSelector, useDispatch } from "react-redux";
import { deleteContact, fetchContacts } from "redux/contactsOperations"; 
import { useEffect } from 'react';
import css from './ContactList.module.css';


export const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts);

  const filterValue = useSelector(state => state.filter);

  const isLoading = useSelector(state => state.contacts.isLoading);
   const error = useSelector(state => state.contacts.error);

  // const store = useSelector(store => store)

  // console.log( store);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));
 
 



  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}

      <ul className={css.contactList}>
        {filterContacts.map(contact => {
            return (
              <li key={contact.id} className={css.contactsItem} id={contact.id}>
                <div className={css.contactItemWrap}>
                <p className={css.contactName}>{contact.name}:
                  <span className={css.contactNumber}>{contact.phone}</span>
                  </p>
                    <button type='button' className={css.addContactBtn} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                </div>
              </li>
            )
          })}      
      </ul>
    </>
    )
}

