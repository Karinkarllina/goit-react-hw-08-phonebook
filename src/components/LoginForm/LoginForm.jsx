import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/userOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './LoginForm.module.css'


export const LoginForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return Notify.failure('Oops! Nothing found. Enter your account information and try again.');
    }

    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    //   form.reset(); 
  };

  return (
    <div className={css.loginWrap}>
      <p className={css.loginText}>If you have an account, please login: </p>
    <form onSubmit={handleSubmit} autoComplete="off" className={css.loginFormWrap}>
      <label className={css.loginLabelWrap}>
        Email
        <input type="email" name="email" className={css.loginInputWrap}/>
      </label>
      <label className={css.loginLabelWrap}>
        Password
        <input type="password" name="password" className={css.loginInputWrap}/>
      </label>
      <button type="submit" className={css.buttoтLogWrap}>Log In</button>
      </form>
    </div>
  );
};
