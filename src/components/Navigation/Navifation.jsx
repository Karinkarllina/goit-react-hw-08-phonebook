import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useSelector } from "react-redux";
import css from './Navigation.module.css'

 

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const error = useSelector(state => state.contacts.error);

  return (
    <>
    {error && <p>{error.message}</p>}
    <nav className={css.navWrap}>
      <NavLink to="/" className={css.navLinkHome}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navLinkCont}>
          Contacts
        </NavLink>
      )}
      </nav>
      </>
  );
};
