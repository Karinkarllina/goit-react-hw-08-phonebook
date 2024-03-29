import { Navigation } from '../Navigation/Navifation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from './AppBar.module.css';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.AppBarWrap}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
