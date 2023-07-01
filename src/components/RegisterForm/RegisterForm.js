import { useDispatch } from 'react-redux';
import { register } from '../../redux/userOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './RegisterForm.module.css';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (name === "" || email === "" || password === "") {
      return Notify.failure('Oops! Nothing found. Please, fill your information in all fields and try again.');
    }

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      }) 
    );
    // console.log(form.elements.name.value)
    form.reset();
  };

  return (
    <div className={css.regWrap}>
      <h1 className={css.regTitle}>Welcome! </h1>
      <p className={css.regText}>In order to start using the phonebook, please register:</p>
    <form onSubmit={handleSubmit} autoComplete="off" className={css.formRegWrap}>
      <label className={css.labelRegWrap}>
        Name
        <input type="text" name="name" className={css.inputRegWrap} />
      </label>
      <label className={css.labelRegWrap}>
        Email
        <input type="email" name="email" className={css.inputRegWrap} />
      </label>
      <label className={css.labelRegWrap} >
        Password
        <input type="password" name="password" className={css.inputRegWrap}/>
      </label >
      <button type="submit" className={css.buttonRegWrap}>Register</button>
      </form>
      </div>
  );
};
