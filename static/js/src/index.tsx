import ReactDOM from 'react-dom';
import React, { ReactPortal, useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        calculatePolicy: 'Calculate policy',
        signIn: 'Sign In',
        email: 'Mail',
        password: 'Password',
        forgotPassword: 'Forgot password',
        dontHaveAnAccount: 'No account',
        alreadyHaveAnAccount: 'Do you already have an account?',
        registration: 'Registration',
        address: 'Address',
        next: 'Next',
        objectAddress: 'Object address',
        street: 'Street',
        flat: 'Apartment',
        house: 'House',
        dateOfEnsurance: 'Insurance start date',
        postalIndex: 'Postal code',
        insurance: 'Insurance',
        payment: 'Payment',
        location: 'Locality',
        locationHouse: 'Housing, building',
        phone: 'Phone number',
        dateOfBirth: 'date of birth',
        isBeneficiary: 'Is the beneficiary',
        fio: 'Last name First name Patronymic',
        ensureMan: 'Insured',
        ensureLimit: 'Term of insurance',
        ensureLimitDesc:
          'Coverage is valid 15 days after the date of purchase. In the calendar, select the start date of the policy.',
        previous: 'Previous',
      },
    },
    ru: {
      translation: {
        calculatePolicy: 'Рассчитать полис',
        signIn: 'Войти',
        email: 'Почта',
        password: 'Пароль',
        forgotPassword: 'Забыли пароль',
        dontHaveAnAccount: 'Нет аккаунта',
        alreadyHaveAnAccount: 'У вас уже есть аккаунт?',
        registration: 'Регистрация',
        address: 'Адрес',
        next: 'Далее',
        objectAddress: 'Адрес объекта',
        street: 'Улица',
        flat: 'Квартира',
        house: 'Дом',
        dateOfEnsurance: 'Дата начала страховки',
        postalIndex: 'Почтовый индекс',
        insurance: 'Страховка',
        payment: 'Оплата',
        location: 'Населённый пункт',
        locationHouse: 'Корпус, строение',
        phone: 'Номер телефона',
        dateOfBirth: 'Дата рождения',
        isBeneficiary: 'Является выгодоприобретателем',
        fio: 'Фамилия Имя Отчество',
        ensureMan: 'Страхователь',
        ensureLimit: 'Срок страхования',
        ensureLimitDesc:
          'Покрытие действительно на 15-й день после даты покупки. В календаре выбирете дату начала действия полиса.',
        previous: 'Назад',
      },
    },
  },
  lng: document.documentElement.lang,
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
});

const App: React.FC = () => {
  const elems: HTMLCollectionOf<Element> =
    document.getElementsByTagName('component');
  const [portals, setPortals] = useState<ReactPortal[]>([]);
  const importRender = useCallback(async (id: string): Promise<ReactPortal> => {
    const module = await import(`./components/${id}`);
    const component = React.createElement(module?.default);
    const item = document.getElementById(id);
    return ReactDOM.createPortal(component, item!);
  }, []);

  useEffect(() => {
    const promises: Promise<ReactPortal>[] = [];

    Array.prototype.slice.call(elems).forEach((item: Element) => {
      if (item.hasAttribute('id') && !item.hasAttribute('isPage')) {
        const id = item.attributes.getNamedItem('id')!.nodeValue!;
        promises.push(importRender(id));
      }
    });

    Promise.all(promises)
      .then((values) => setPortals(values))
      .catch((e) => console.error(e));
  }, []);

  return (
    <BrowserRouter
      basename={`${
        document.documentElement.lang === 'ru'
          ? '/'
          : document.documentElement.lang
      }`}
    >
      <I18nextProvider i18n={i18next}>{portals}</I18nextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
