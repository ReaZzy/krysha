import React from 'react';
import { useTranslation } from 'react-i18next';

const NavbarAuth: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center md:ml-12">
      <a
        href="property"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        {t('calculatePolicy')}
      </a>
      <a
        href="sign-in"
        className="ml-8 font-bold inline-flex items-center justify-center px-4 py-2 hover:bg-gray-200 border border-transparent rounded-md"
      >
        {t('signIn')}
      </a>
    </div>
  );
};

export default NavbarAuth;
