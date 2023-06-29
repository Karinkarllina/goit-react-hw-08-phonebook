import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/userOperations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css'


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenuWrap}>
      <p className={css.userWelcome}>Welcome, {user.name}</p>
      <button type="button" className={css.userLogOut} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
