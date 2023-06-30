import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/userOperations';
import css from './LoginForm.module.css'


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginWrap}>
      <p className={css.loginText}>If you have an account, please login: </p>
    <form  onSubmit={handleSubmit} autoComplete="off" className={css.loginFormWrap}>
      <label className={css.loginLabelWrap}>
        Email
        <input type="email" name="email" className={css.loginInputWrap}/>
      </label>
      <label className={css.loginLabelWrap}>
        Password
        <input type="password" name="password" className={css.loginInputWrap}/>
      </label>
      <button type="submit" className={css.buttomLogWrap}>Log In</button>
      </form>
    </div>
  );
};
