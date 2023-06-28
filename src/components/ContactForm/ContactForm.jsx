import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contactsOperations"; 
import css from './ContactForm.module.css';

export function ContactForm() { 
    
    const dispatch = useDispatch();
    
    const contacts = useSelector(state => state.contacts.contacts); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const formValue = event.currentTarget;

        const newContact = {
            name: formValue.elements.name.value,
            phone: formValue.elements.phone.value,  
        }

        const filterName = contacts.filter(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()).length;
        // console.log(filterName)

        if (filterName) {
            return alert(`${newContact.name} is already in contacts`)
        }
        
        dispatch(
            addContact(
                newContact
            )
        );

    formValue.reset();
    };
  
    
    return (
        <form onSubmit={handleSubmit} className={css.formMaine}>
            <label className={css.formMaineLabel}>
                Name
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                className={css.inputMaine}
                />
            </label>
            <label className={css.formMaineLabel}>
                Number
                <input
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className={css.inputMaine}
                />
            </label>
          <button type='submit' className={css.formAddBtn}> Add Contact </button>
        </form>
    )
}

