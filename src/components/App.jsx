
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from '../redux/userOperations';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

   useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



  return isRefreshing ? (<b>Refreshing user...</b>) : (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        
           <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          } />
          <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
          </Route>
        </Routes>
  );
}

