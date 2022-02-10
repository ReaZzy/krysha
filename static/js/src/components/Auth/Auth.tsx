import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const SignIn = React.lazy(() => import('./SignIn/SignIn'));
const SignUp = React.lazy(() => import('./SignUp/SignUp'));

const Auth: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <SignIn />
          </Suspense>
        }
        path="/sign-in"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <SignUp />
          </Suspense>
        }
        path="/sign-up"
      />
    </Routes>
  );
};
export default Auth;
