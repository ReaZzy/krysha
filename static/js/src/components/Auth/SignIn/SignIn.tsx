import { Form, Formik } from 'formik';
import React from 'react';
import FormInput from '../../FormBlock/FormInput';
import { Link } from 'react-router-dom';

const SignIn: React.FC = React.memo(() => {
  return (
    <div className={'max-w-2xl mx-auto'}>
      <div className="flex justify-center bg-gray-50 ">
        <div className="container border-2 border-gray-200 p-10 rounded-lg">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              alert(values);
            }}
          >
            <Form className={'flex flex-col gap-y-2'}>
              <FormInput
                type={'email'}
                name={'email'}
                label={'Почта'}
                placeholder={'Почта'}
              />
              <FormInput
                type={'password'}
                name={'password'}
                label={'Пароль'}
                placeholder={'Пароль'}
              />
              <Link to={'/iforgot'} className={'text-indigo-500 font-semibold'}>
                Забыли пароль?
              </Link>
              <div className={'flex flex-row justify-between items-center'}>
                <p className="text-md text-center text-gray-600">
                  Нет аккаунта?{' '}
                  <Link
                    to={'/sign-up'}
                    className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
                  >
                    Регистрация
                  </Link>
                </p>
                <button
                  type="submit"
                  className="font-semibold py-2 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
                >
                  Войти
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
});

export default SignIn;
