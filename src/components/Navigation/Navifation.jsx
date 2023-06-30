import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
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
  );
};
